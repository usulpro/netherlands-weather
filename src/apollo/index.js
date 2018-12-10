import { ApolloClient } from 'apollo-client';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { window } from 'global';

const endpoint = process.env.ENDPOINT || 'https://api.graph.cool/simple/v1/cjpeioazq94e80143lvgo39w7';

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
