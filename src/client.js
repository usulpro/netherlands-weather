const React = require('react');
import ReactDOMServer from 'react-dom/server';

const App = ({ url }) => (
  <div>
    <h2>React App</h2>
    <span>on {url}</span>
    <hr/>
    <a href="some-url">test url</a>
  </div>
);


export const render = url => ReactDOMServer.renderToString(<App url={url} />);
