const fs = require('fs');
const path = require('path');
const shell = require('shelljs');

const dataJson = require('./data.json');
console.log(`​data.json is loaded: ${dataJson.length} items`);

const citiesId = new Set();

const isUniqueCity = item => {
  const exist = citiesId.has(item.station_id);
  if (exist) return false;
  citiesId.add(item.station_id);
  return true;
};

const cityId = item => `city-${item.station_id}`;

const convertCity = item =>
  isUniqueCity(item)
    ? {
        _typeName: 'City',
        id: cityId(item),
        name: item.place_name,
        latitude: parseFloat(item.latitude),
        longitude: parseFloat(item.longitude),
      }
    : undefined;

const weatherId = item => `${item.station_id}-${item.datetime}`;
const weatherDate = item => new Date(item.datetime).toISOString();

const convertWeather = item => ({
  _typeName: 'Weather',
  id: weatherId(item),
  datetime: weatherDate(item),
  temperatureMax: parseFloat(item.temperature_max) || undefined,
  temperatureMin: parseFloat(item.temperature_min) || undefined,
  precipitationProbability:
    parseInt(item.precipitation_probability, 10) || undefined,
  precipitationMm: parseFloat(item.precipitation_mm) || undefined,
});
const connectWeather = item => {
  return [
    {
      _typeName: 'Weather',
      id: weatherId(item),
      fieldName: 'city',
    },
    {
      _typeName: 'City',
      id: cityId(item),
      fieldName: 'weather',
    },
  ];
};

const cityNodes = dataJson.map(convertCity).filter(v => v);
const weatherNodes = dataJson.map(convertWeather).filter(v => v);
const convertRelations = dataJson.map(connectWeather).filter(v => v);

const ndfNodes = {
  valueType: 'nodes',
  values: [...cityNodes, ...weatherNodes],
};

const ndfRelations = {
  valueType: 'relations',
  values: [...convertRelations],
};

const fNameNodes = `./scripts/output/nodes/001.json`;
fs.writeFileSync(fNameNodes, JSON.stringify(ndfNodes));

const fNameRelations = `./scripts/output/relations/001.json`;
fs.writeFileSync(fNameRelations, JSON.stringify(ndfRelations));

shell.exec(`zip -r data.zip *`, {
  cwd: path.resolve(__dirname, './output'),
});
console.log('Done!');
