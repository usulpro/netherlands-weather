import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import '@storybook/addon-console';

addDecorator(
  withOptions({
    name: 'Weather',
    url: 'https://usulpro-weather.herokuapp.com/',
  })
);

function loadStories() {
  require('../src/__stories__/index.js');
}

configure(loadStories, module);
