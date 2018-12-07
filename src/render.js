import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';

import App from './app';
import { client } from './apollo/index';

// const SsrApp = (url) => (
//   <ApolloProvider client={client()}>
//     <h2>SSR App</h2>
//     <App url={url} />
//   </ApolloProvider>
// );

const SApp = ({ url, client }) => (
  <ApolloProvider client={client}>
    <h2>SSR App</h2>
    <App url={url} />
  </ApolloProvider>
);

const SsrApp = (url, client) => <SApp url={url} client={client} />;

const Sapp = url => <App url={url} />;

export const render = url =>
  renderToStringWithData(SsrApp(url, client())).then(content => {
    console.log('#### ​content ---->', content);
    const initialState = client().extract();
    console.log('​initialState', initialState);
    return content;
  });

// e xport const render = url =>
//   ReactDOMServer.renderToString(
//     <ApolloProvider client={client()}>
//       <App url={url} />
//     </ApolloProvider>
//   );
