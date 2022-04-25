import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from 'src/components/App';
import store from 'src/store';

const rootElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootElement, document.getElementById('root'));
