import { ApolloClient } from 'apollo-client';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const endpoint = 'https://api.graph.cool/simple/v1/cjpeioazq94e80143lvgo39w7';
// const endpoint = process.env.ENDPOINT;
console.log("​endpoint", endpoint)

export const client = () =>
  new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: endpoint,
      fetch,
    }),
    cache: new InMemoryCache(),
  });
