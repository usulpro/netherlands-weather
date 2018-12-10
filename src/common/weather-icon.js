import React from 'react';
import styled from '@emotion/styled';

import Day from './svg/day.svg';
import CloudyDay from './svg/cloudy-day-1.svg';
import Cloudy from './svg/cloudy.svg';
import Rainy1 from './svg/rainy-1.svg';
import Rainy7 from './svg/rainy-7.svg';
import Thunder from './svg/thunder.svg';

const weatherGrades = [
  {
    mm: 0,
    fname: 'day.svg',
    Icon: Day,
  },
  {
    mm: 6,
    fname: 'cloudy-day-1.svg',
    Icon: CloudyDay,
  },
  {
    mm: 10,
    fname: 'cloudy-day-1.svg',
    Icon: Rainy1,
  },
  {
    mm: 13,
    fname: 'cloudy-day-2.svg',
    Icon: Cloudy,
  },
  {
    mm: 15,
    fname: 'cloudy-day-3.svg',
    Icon: Rainy7,
  },
  {
    mm: 17,
    fname: 'cloudy-day-3.svg',
    Icon: Thunder,
  },
];

export const createIcon = weather => {
  const curentMm = weather.precipitationMm;
  if (curentMm === null) return {
    mm: null,
    fname: null,
    Icon: () => '\u231B',
  };
  const grades = weatherGrades.map((item, ind, array) => ({
    ...item,
    mmNext: (array[ind + 1] || { mm: Infinity }).mm,
  }));
  const weatherGrade = grades.find(
    ({ mm, mmNext }) => mm <= curentMm && curentMm < mmNext
  );
  return weatherGrade;
};
