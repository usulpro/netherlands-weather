import React from 'react';
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { today } from '../constants';

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
  `;

const Date = styled.div`
  color: white;
  opacity: 0.8;
  font-size: 18px;
  font-family: sans-serif;
  margin-bottom: 8px;
`;

const Header = () => (
  <Container>
    <Title>Netherlands</Title>
    <Date>{dayjs(today).format('DD MMM YYYY')}</Date>
    <Date>Select City</Date>
  </Container>
);

export default Header;
