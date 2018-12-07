const Koa = require('koa');
const { render } = require('./dist/client.bundle');

const app = new Koa();


const htmlTemplate = url => `<!DOCTYPE html>
<html>
    <head>
        <title>Universal React server bundle</title>
    </head>
    <body>
        <div id="app">${render(url)}</div>
    </body>
</html>`;

app.use(async ctx => {
  ctx.body = htmlTemplate(ctx.request.url);
  console.log('method:', ctx.request.method);
  console.log('url:', ctx.request.url);
});

app.on('error', err => {
  console.log(err);
});

const port = process.env.PORT;

if (!port) {
  console.log(`Warning! process.env.PORT is ${port}. Looks like you started via "npm start". Please use "heroku local web" instead!`);
  return
}

app.listen(port, () => console.log(`\nServer starts on ${port}`));
