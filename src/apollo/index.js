import { ApolloClient } from 'apollo-client';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { window } from 'global';

const endpoint = process.env.ENDPOINT;

export const client = () =>
  new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: endpoint,
      fetch,
    }),
    cache: window
      ? new InMemoryCache().restore(window.__APOLLO_STATE__)
      : new InMemoryCache(),
  });
