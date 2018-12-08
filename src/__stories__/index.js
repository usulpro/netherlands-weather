import React from 'react';
import { storiesOf } from '@storybook/react';
import { ApolloProvider } from 'react-apollo';

import { client } from '../apollo/index';

import App from '../app';

const SApp = ({ url, client }) => (
  <ApolloProvider client={client}>
    <h2>SSR App</h2>
    <App url={url} />
  </ApolloProvider>
);

storiesOf('App', module).add('Home', () => (
  <SApp url={'/'} client={client()} />
));
