# netherlands-weather

Live Demo:
https://usulpro-weather.herokuapp.com/

## Features & Details

- React SPA with SRR
- Client and Server routing with Reach Router
- Human-readable URLs
- Responsive design
- GraphQL API (Graphcool BaaS) for data storage
- Apollo client for fetching and caching weather data from API endpoint
- Client and Server router based data fetching (*)
- Google map with custom appearance and clustered markers
- Text search through cities
- Date and city selection. Interactive map markers.
- Script to convert JSON data to NDF in order upload to BaaS (`scripts/ndf.js`)
- Deployable Graphcool Service (`API/README.md`)
- Deployable to Heroku NodeJs application
- Continuous delivery to Heroku from Gitbub (master branch)
- Storybook for developing and UI testing
- Test coverage with Jest https://usulpro-weather.herokuapp.com/coverage/lcov-report/index.html

(*) how to test:
1) Select a city from the list - weather data for this city will be fetched from your browser
2) Refresh the page - server will render the page fulfilled with data

## How to launch locally

You'll need Heroku CLI:
https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

```shell
git clone https://github.com/UsulPro/netherlands-weather.git
cd netherlands-weather
yarn
yarn dev

```

After building process is finished, open your browser on http://localhost:3000

## How to develop

- `yarn storybook` to develop UI
- `yarn dev` to develop server and SSR
- `yarn test` to watch tests

## How to deploy

### API

- `yarn convert` to prepare data in NDF

Then you should be logged in to Graphcool Service (`graphcool login --token "YOUR_TOKEN"`)

- `yarn deploy:api` to deploy GraphQL schema to BaaS
- `yarn upload` to upload data to BaaS (Careful! It'll reset DB as well)

### APP

Just `git push` master branch to Github, CD will start automatically.

## Credits

Oleg Proskurin 2018
email: pro@usul.su
