import React from 'react';
import styled from '@emotion/styled';

import List from '../common/List';
import CityList from './CityList';

const ListHolder = styled.div`
  position: relative;
  left: 7vw;
  top: 5vw;
`;

const Panel = ({ today }) => (
  <ListHolder>
    <List>
      <CityList today={today} />
    </List>
  </ListHolder>
);

export default Panel;
