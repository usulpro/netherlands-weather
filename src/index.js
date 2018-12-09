import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { client } from './apollo/index';

const renderApp = () =>
  ReactDOM.render(<App client={client()} />, document.getElementById('app'));

renderApp();
