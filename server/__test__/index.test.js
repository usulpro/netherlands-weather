import { htmlTemplate } from '..';
import { render } from '../../src/render';

process.env.ENDPOINT =
  'https://api.graph.cool/simple/v1/cjpeioazq94e80143lvgo39w7';

it('SSR home page', async () => {
  expect(await htmlTemplate('/', render)).toMatchSnapshot();
});
it('SSR city page', async () => {
  expect(await htmlTemplate('/cities/amsterdam', render)).toMatchSnapshot();
});
