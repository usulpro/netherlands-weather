import React from 'react';
import { storiesOf } from '@storybook/react';
import { ApolloProvider } from 'react-apollo';

import { client } from '../../apollo/index';
import Layout from '../Layout';
import { createIcon } from '../weather-icon';

const iconChapter = mm => {
  const { Icon, fname } = createIcon({ precipitationMm: mm });
  return (
    <div>
      <h3>Temperature of {mm || 'null'} degrees. File: "{fname}"</h3>
      <div>
        <Icon />
      </div>
      <hr/>
    </div>
  );
};

storiesOf('Layout', module)
  .add('Home', () => (
    <ApolloProvider client={client()}>
      <Layout />
    </ApolloProvider>
  ))
  .add('Icons', () => {
    return (
      <div>
        {iconChapter(2)}
        {iconChapter(8)}
        {iconChapter(12)}
        {iconChapter(14)}
        {iconChapter(16)}
        {iconChapter(18)}
        {iconChapter(null)}
      </div>
    );
  });
