import React from 'react';
import styled from '@emotion/styled';

import { theme } from '../constants';

const Container = styled.div`
  width: 30vw;
  height: 50vw;
  border: ${theme.panelBackground} solid 8px;
  border-radius: 8px;
  background-color: ${theme.panelBackground};
  display: flex;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  margin: 4px;
  border: gray solid 8px;
  border-radius: 8px;
  background-color: gray;
  height: 1px;
  flex-grow: 1;
`;

const CityList = () => <Container>
  <InnerContainer/>
</Container> ;

export default CityList;
