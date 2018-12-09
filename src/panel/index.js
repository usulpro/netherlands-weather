import React from 'react';
import styled from '@emotion/styled';

import List from '../common/List';
import CityList from './CityList';

const ListHolder = styled.div`
  position: relative;
  left: 7vw;
  top: 5vw;
`;

const Panel = () => (
  <ListHolder>
    <List>
      {'<CityList />'}
    </List>
  </ListHolder>
);

export default Panel;
