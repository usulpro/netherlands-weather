import React from 'react';
import { storiesOf } from '@storybook/react';
import { ApolloProvider } from 'react-apollo';
import styled from '@emotion/styled';

import CityList from '../CityList';
import { client } from '../../apollo/index';

const Holder = styled.div`
  width: 400px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
`;

storiesOf('Panel', module).add('Home', () => (
  <ApolloProvider client={client()}>
    <Holder>
      <CityList />
    </Holder>
  </ApolloProvider>
));
