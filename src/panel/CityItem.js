import React from 'react';
import { navigate } from '@reach/router';
import styled from '@emotion/styled';

import { createIcon } from '../common/weather-icon';

const Container = styled.li`
  border-bottom: 1px #b7b7b7 solid;
  padding-top: 2px;
  padding-left: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #442121;
  cursor: pointer;
  &:hover {
    background-color: hsl(0, 0%, 78%);
  }
  & .icon {
    width: 70px;
    display: flex;
    justify-content: space-around;
  }
  & .info {
    width: 80px;
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    font-weight: 500;
  }
  & .space {
    width: 1px;
    flex-grow: 1;
  }
`;

const CityItem = ({ city }) => {
  const weather = city.weather[0] || {
    temperatureMin: null,
    precipitationMm: null,
  };
  const range = weather.temperatureMin
    ? `${weather.temperatureMin}\u00B0 - ${weather.temperatureMax}\u00B0`
    : 'unknown';
  const Icon = createIcon(weather).Icon;
  return (
    <Container onClick={() => navigate(`/cities/${encodeURIComponent(city.name.toLowerCase())}`)}>
      {city.name}
      <div className="space" />
      <div className="info">{range}</div>
      <div className="icon">
        <Icon />
      </div>
    </Container>
  );
};

export default CityItem;
