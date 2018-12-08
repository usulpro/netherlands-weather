import { ApolloClient } from 'apollo-client';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const endpoint = process.env.ENDPOINT;
console.log('​endpoint', endpoint);

export const client = () =>
  new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: endpoint,
      fetch,
    }),
    cache: new InMemoryCache(),
  });
