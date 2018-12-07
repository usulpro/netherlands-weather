import React from 'react';
import ReactDOM from 'react-dom';

import App from './app'

const renderApp = () => {
  console.log('​App will start in 3s...');
  // TODO: It's just only for ssr testing, remove later
  setTimeout(
    () => ReactDOM.render(<App />, document.getElementById('app')),
    3000
  );
};

renderApp();
