import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import Header from '../header';
import Panel from '../panel';

import { theme } from '../constants';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 700px;
  top: 0px;
  left: 0px;
`;

const Holder = styled.div`
  position: absolute;
  top 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const panelBg = (
  <Holder>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <polygon
        points="80,0 100,0 100,5 0,40 0,15"
        style={{ fill: theme.panelBackground }}
      />
    </svg>
  </Holder>
);

const headerBg = (
  <Holder>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <polygon
        points="0,0 100,0 0,20"
        style={{ fill: theme.headerBackground }}
      />
    </svg>
  </Holder>
);

const MapHolder = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  top: 5vh;
  background-color: #d8d8d8;
`;

const HeaderHolder = styled.div`
  position: absolute;
  top 0px;
  width: 100%;
  height: 200px;
`;

const PanelHolder = styled.div`
  position: absolute;
  top 200px;
  width: 400px;
  height: 200px;
`;

const Layout = () => (
  <Container>
    <Global
      styles={css`
        body: {
          margin: 0;
        }
      `}
    />
    <MapHolder id="map" />
    {headerBg}
    {panelBg}
    <HeaderHolder>
      <Header />
    </HeaderHolder>
    <PanelHolder>
      <Panel />
    </PanelHolder>
  </Container>
);

export default Layout;
