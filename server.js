const Koa = require('koa');
const serve = require('koa-static');
const chalk = require('chalk');

const { render } = require('./dist/client.bundle');

const app = new Koa();
app.use(serve('public'));

const htmlTemplate = async url =>
  render(url).then(
    ({ content, data }) => /* HTML */ `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>Weather</title>
        </head>
        <body>
          <div id="app">${content}</div>
          <script>
            window.__APOLLO_STATE__ = ${JSON.stringify(data)};
          </script>
          <script src="/client.bundle.js"></script>
          <noscript>
            Without JavaScript you can't interact with this App.
          </noscript>
        </body>
      </html>
    `
  );

app.use(async ctx => {
  ctx.body = await htmlTemplate(ctx.request.url);
  console.log('url:', ctx.request.url);
});

app.on('error', err => {
  console.log(err);
});

const port = process.env.PORT;

if (!port) {
  console.log(
    chalk.yellow(
      `Warning! process.env.PORT is ${port}. Looks like you started via "npm start". Please use "heroku local web" instead!`
    )
  );
  return;
}

app.listen(port, () => console.log(chalk.cyan(`\nServer starts on ${port}`)));
