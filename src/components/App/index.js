import './style.scss';
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';
import Error from 'src/components/Error';
import Settings from 'src/components/Settings';
import { useSelector } from 'react-redux';

function App() {
  const displayError = useSelector((state) => state.displayError);
  return (
    <div className="app">
      <Settings />
      <Messages />
      {displayError && <Error />}
      <Form />
    </div>
  );
}

export default App;
