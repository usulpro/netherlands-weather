import React from 'react';
import { storiesOf } from '@storybook/react';
import { ApolloProvider } from 'react-apollo';

import { client } from '../../apollo/index';
import Layout from '../Layout';
import { createIcon } from '../weather-icon';

storiesOf('Layout', module)
  .add('Home', () => (
    <ApolloProvider client={client()}>
      <Layout />
    </ApolloProvider>
  ))
  .add('Icons', () => {
    const Icon1 = createIcon({ precipitationMm: 2 }).Icon;
    const Icon2 = createIcon({ precipitationMm: 8 }).Icon;
    const Icon3 = createIcon({ precipitationMm: 12 }).Icon;
    const Icon4 = createIcon({ precipitationMm: 14 }).Icon;
    const Icon5 = createIcon({ precipitationMm: 16 }).Icon;
    const Icon6 = createIcon({ precipitationMm: 18 }).Icon;
    const Icon7 = createIcon({ precipitationMm: null }).Icon;
    return (
      <div>
        Icon1-2:
        <br />
        <Icon1 />
        Icon2-8:
        <br />
        <Icon2 />
        Icon3-12:
        <br />
        <Icon3 />
        Icon4-14:
        <br />
        <Icon4 />
        Icon5-16:
        <br />
        <Icon5 />
        Icon6-18:
        <br />
        <Icon6 />
        Icon7-null:
        <br />
        <Icon7 />
      </div>
    );
  });
