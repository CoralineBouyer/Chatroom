import { useSelector, useDispatch } from 'react-redux';
import { toggleSettings, writeEmail, writePassword } from '../../actions';
import './style.scss';

function Settings() {
  const toggleBtnSettings = useSelector((state) => state.settingsOpen);
  const emailInput = useSelector((state) => state.emailInput);
  const passwordInput = useSelector((state) => state.passwordInput);
  const dispatch = useDispatch();

  const changeEmail = (event) => {
    const action = writeEmail(event.target.value);
    dispatch(action);
  };
  const changePassword = (event) => {
    const action = writePassword(event.target.value);
    dispatch(action);
  };

  const handleToggle = () => {
    const action = toggleSettings();
    dispatch(action);
  };
  return (
    <div className="settings">
      <button className="settings-closebtn" type="submit" onClick={handleToggle} aria-label="close">{toggleBtnSettings ? 'X' : '+'}</button>
      <form className="settings-form">
        {toggleBtnSettings && (
          <>
            <input
              className="settings-input"
              type="text"
              placeholder="Email"
              aria-label="Email"
              value={emailInput}
              onChange={changeEmail}
            />
            <input
              className="settings-input"
              type="text"
              placeholder="Mot de passe"
              aria-label="Password"
              value={passwordInput}
              onChange={changePassword}
            />
            <button className="settings-submitbtn" type="submit" aria-label="Envoyer">Envoyer</button>
          </>
        )}
      </form>

    </div>
  );
}

export default Settings;
