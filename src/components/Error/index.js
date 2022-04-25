import { useSelector } from 'react-redux';
import './style.scss';

function Error() {
  const message = useSelector((state) => state.errorMessage);
  return (
    <p className="error">{message}</p>
  );
}

export default Error;
