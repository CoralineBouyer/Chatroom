/* eslint-disable max-len */
import { useEffect, useRef } from 'react';
import { Send } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, showError, writeMessage } from '../../actions';
import './style.scss';

function Form() {
  // 1. je crée la ref,
  // un conteneur pratique pour mémoriser une élement du DOM pour cet appel de composant
  const inputRef = useRef();
  const inputValue = useSelector((state) => state.messageInProgress);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const action = writeMessage(event.target.value);
    dispatch(action);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length === 0) {
      dispatch(showError('Un message ne peut être vide'));
    }
    // trim c'est top pour enlever les espaces au début et à la fin d'une string
    else if (inputValue.trim().length === 0) {
      dispatch(showError('Un message ne peut pas contenir uniquement des espaces'));
    }
    else {
      const action = sendMessage();
      dispatch(action);
    }
  };
  useEffect(() => {
    // 3. après le rendu, j'ai accès à mon élement du dom réel
    inputRef.current.focus();
  }, []);
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        ref={inputRef} // 2. via la prop ref je dis à react-dom de mémoriser l'élement du DOM rel dans ma ref
        className="form-input"
        value={inputValue}
        type="text"
        placeholder="Saisissez votre message"
        aria-label="Message"
        onChange={handleChange}
      />
      <button className="form-button" aria-label="Envoyer" type="submit">
        <Send size="32" />
      </button>
    </form>
  );
}

export default Form;
