import React from 'react';
import { Query } from 'react-apollo';
import styled from '@emotion/styled';

import { createIcon } from '../common/weather-icon';
import DateInput from './DateInput';
import query from './city.gql';

const Container = styled.header`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 8px 24px;
`;

const Title = styled.h1`
  color: white;
  font-size: 34px;
  font-family: sans-serif;
  margin: 0px;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  & button {
    background-color: #6492bf;
    color: white;
    border: none;
    border-radius: 2px;
    margin-left: 10px;
    padding: 2px 6px;
    &:hover {
      background-color: #72a6da;
    }
  }
`;

const Comment = styled.div`
  color: white;
  opacity: 0.8;
  font-size: 18px;
  font-family: sans-serif;
  margin-bottom: 8px;
`;

const IconHolder = styled.div`
  width: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & .icon-position {
    transform: scale(2);
    transform-origin: center;
    padding-top: 5px;
  }
  & .info-position {
    margin-left: 20px;
    color: white;
    font-family: sans-serif;
    font-weight: 800;
    font-size: calc(16px + 2vw);
  }
`;

const toPascalCase = ([c, ...ity]) =>
  `${c.toUpperCase()}${ity.join('').toLowerCase()}`;

const Header = ({ city, home, navigate, today, changeDate }) => {
  const title = city ? toPascalCase(city) : 'Netherlands';
  return (
    <Container>
      <Title>
        {title}
        {!home && <button onClick={() => navigate('../../')}>back</button>}
      </Title>
      <DateInput date={today} onChange={changeDate}/>
      {home ? (
        <Comment>Select City</Comment>
      ) : (
        <Query query={query} variables={{ today, city }}>
          {({ data: { city }, loading }) => {
            if (loading) return 'loading...';
            const weather = city[0].weather[0] || {
              temperatureMin: null,
              precipitationMm: null,
            };
            const Icon = createIcon(weather).Icon;
            const middle = weather.temperatureMin
              ? `${Math.round(
                  (weather.temperatureMin + weather.temperatureMax) / 2
                )}\u00B0`
              : '';
            return (
              <IconHolder>
                <div className="icon-position">
                  <Icon />
                </div>
                <div className="info-position">{middle}</div>
              </IconHolder>
            );
          }}
        </Query>
      )}
    </Container>
  );
};

export default Header;
