import React from 'react';
import { renderToStringWithData } from 'react-apollo';
import { ServerLocation } from '@reach/router';

import App from './app';
import { client } from './apollo/index';

export const render = url => {
  const apolloClient = client();
  return renderToStringWithData(
    <ServerLocation url={url}>
      <App client={apolloClient} />
    </ServerLocation>
  ).then(content => {
    const data = apolloClient.extract();
    return { content, data };
  });
};
