import React from 'react';
import { storiesOf } from '@storybook/react';
import { ApolloProvider } from 'react-apollo';

import CityList from '../CityList';
import { client } from '../../apollo/index';

storiesOf('Panel', module).add('Home', () => (
  <ApolloProvider client={client()}>
    <CityList />
  </ApolloProvider>
));
