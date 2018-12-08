const Koa = require('koa');
const serve = require('koa-static');
const chalk = require('chalk');

const { render } = require('./dist/client.bundle');

const app = new Koa();
app.use(serve('public'));

const htmlTemplate = async url => `<!DOCTYPE html>
<html>
    <head>
        <title>Weather</title>
    </head>
    <body>
        <div id="app">${await render(url)}</div>
        </body>
        </html>`;
        // <script src="client.bundle.js"></script>

app.use(async ctx => {
  ctx.body = await htmlTemplate(ctx.request.url);
  console.log('method:', ctx.request.method);
  console.log('url:', ctx.request.url);
});

app.on('error', err => {
  console.log(err);
});

const port = process.env.PORT;

if (!port) {
  console.log(
    `Warning! process.env.PORT is ${port}. Looks like you started via "npm start". Please use "heroku local web" instead!`
  );
  return;
}

app.listen(port, () => console.log(chalk.cyan(`\nServer starts on ${port}`)));
