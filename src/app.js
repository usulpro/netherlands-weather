import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Query } from 'react-apollo';
import { Router, Link } from '@reach/router';

import query from './cities.gql';

const Home = () => (
  <>
    <h2>React App</h2>
    <hr />
    <Link to="/cities/amsterdam">amsterdam</Link>
    <br />
    <Link to="/cities/rotterdam">rotterdam</Link>
    <hr />
  </>
);

const City = ({ city }) => (
  <>
    <h2>{city.toUpperCase()}</h2>
    <br />
    <Link to="/">back</Link>
    <br />
    <br />
    <Query query={query} variables={{ city }}>
      {({ data, loading }) => (
        <div>
          {`${loading ? '* ' : ''}`}
          {JSON.stringify(data)}
        </div>
      )}
    </Query>
  </>
);

const Layout = () => (
  <main>
    <Router>
      <Home path="/" />
      <City path="/cities/:city" />
    </Router>
  </main>
);

const App = ({ client }) => (
  <ApolloProvider client={client}>
    <Layout />
  </ApolloProvider>
);

export default App;
