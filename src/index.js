import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import App from './app';
import { client } from './apollo/index';

const renderApp = () => {
  console.log('​App will start in 3s...');
  // TODO: It's just only for ssr testing, remove later
  // setTimeout(
  //   () =>
  //     ReactDOM.render(
  //       <ApolloProvider client={client()}>
  //         <App />
  //       </ApolloProvider>,
  //       document.getElementById('app')
  //     ),
  //   3000
  // );
};

renderApp();
