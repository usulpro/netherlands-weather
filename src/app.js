import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { client } from './apollo/index';
import query from './cities.graphql'

const App = ({ url }) => (
  <div>
    <h2>React App</h2>
    <span>on {url}</span>
    <hr />
    <a href="amsterdam">amsterdam</a>
    <br />
    <a href="rotterdam">rotterdam</a>
    <hr />
    <Query
      // query={gql`
      //   query getCities($city: String) {
      //     allCities(filter: { name: $city }) {
      //       name
      //     }
      //   }
      // `}
      query={query}
      variables={{city: url.replace('/','')}}
    >
      {({ data, loading }) => <div>{JSON.stringify(data)}</div>}
    </Query>
  </div>
);

export default App;
