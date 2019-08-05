import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import configureStore from 'config/store';

const { persistor, store } = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={<div>loading...</div>} persistor={persistor}>
          <App />
      </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
