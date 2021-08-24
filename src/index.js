import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserProvider from './providers/index';

import './index.css';

import { Provider } from 'react-redux'
import store from './redux/store';

// testing
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <UserProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserProvider>
  </Provider>,
  document.getElementById('root')
);
