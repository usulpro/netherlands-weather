import React from 'react';
import { ApolloProvider } from 'react-apollo';

import Layout from './common/Layout'

const App = ({ client }) => (
  <ApolloProvider client={client}>
    <Layout />
  </ApolloProvider>
);

export default App;
