import React from 'react';
import { Router, Link } from '@reach/router';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import Header from '../header';
import Panel from '../panel';
import Maps from '../maps';

import { theme, today } from '../constants';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: ${theme.panelBackground};
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
        points="80,0 100,0 100,5 100,200 0,200 0,15"
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
  height: 110vh;
  top: 0;
  clip-path: polygon(96% 0%, 100% 0%, 100% 150%,0 150%,0 70%);
  background-color: #dfd2ae;
`;

const HeaderHolder = styled.div`
  position: absolute;
  top 0px;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 86% 0, 0 25%);
  background-color: ${theme.headerBackground}
`;

const PanelHolder = styled.div`
  position: absolute;
  top: calc(20px + 10vw);
  width: 400px;
  height: 200px;

`;

class Layout extends React.Component {
  state = {
    today,
  };

  changeDate = today => this.setState({ today });

  render() {
    return (
      <Container>
        <HeaderHolder>
          <Router>
            <Header
              today={this.state.today}
              path="/"
              home
              changeDate={this.changeDate}
            />
            <Header
              today={this.state.today}
              path="/cities/:city"
              changeDate={this.changeDate}
            />
          </Router>
        </HeaderHolder>
        <MapHolder id="map-holder">
          <Router>
            <Maps today={this.state.today} path="/" />
            <Maps today={this.state.today} path="/cities/:city" />
          </Router>
        </MapHolder>
        <PanelHolder>
          <Panel today={this.state.today} />
        </PanelHolder>
      </Container>
    );
  }
}

export default Layout;
