import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './redux/store';
import GlobalStyle from './theme/globalStyle';

ReactDOM.render(
  <Provider store={store}>
    <App/>
    <GlobalStyle/>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
