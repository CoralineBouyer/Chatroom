export const WRITE_MESSAGE = 'WRITE_MESSAGE';
export const writeMessage = (message) => ({
  type: WRITE_MESSAGE,
  payload: message,
});

export const WRITE_EMAIL = 'WRITE_EMAIL';
export const writeEmail = (email) => ({
  type: WRITE_EMAIL,
  email,
});

export const WRITE_PASSWORD = 'WRITE_PASSWORD';
export const writePassword = (password) => ({
  type: WRITE_PASSWORD,
  password,
});

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const SHOW_ERROR = 'SHOW_ERROR';
export const showError = (error) => ({
  type: SHOW_ERROR,
  error: error,
});

export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});
