/* eslint-disable max-len */
import {
  SEND_MESSAGE,
  SHOW_ERROR,
  WRITE_MESSAGE,
  TOGGLE_SETTINGS,
  WRITE_EMAIL,
  WRITE_PASSWORD,
} from '../actions';
import { getNextMessageID } from '../selectors';

const initialState = {
  messages: [
    {
      id: 1,
      author: 'Coraline',
      content: 'Hello !',
    },
    {
      id: 2,
      author: 'Coraline',
      content: 'Bienvenue :)',
    },
  ],
  messageInProgress: '',
  displayError: false,
  errorMessage: '',
  settingsOpen: true,
  emailInput: '',
  passwordInput: '',
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOW_ERROR:
      return {
        ...state,
        displayError: true,
        errorMessage: action.error,
        messageInProgress: '',
      };
    case WRITE_MESSAGE:
      return {
        ...state,
        messageInProgress: action.payload,
      };
    case WRITE_EMAIL:
      return {
        ...state,
        emailInput: action.email,
      };
    case WRITE_PASSWORD:
      return {
        ...state,
        passwordInput: action.password,
      };
    case TOGGLE_SETTINGS:
      return {
        ...state,
        settingsOpen: !state.settingsOpen,
      };

    case SEND_MESSAGE:
      return {
        ...state,
        messages: [ // une nouvelle liste
          ...state.messages, // avec tout ce qu'il y a déjà
          { // + un nouveau message
            id: getNextMessageID(state), // ici j'utilise un selector : une fonction pure à qui je donne le state et qui en ressort une valeur
            author: 'Anonyme',
            content: state.messageInProgress,
          },
        ],
        messageInProgress: '',
        displayError: false,
      };
    default:
      return state;
  }
}

export default reducer;
