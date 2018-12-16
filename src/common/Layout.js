import React from 'react';
import { Router, Link } from '@reach/router';
import styled from '@emotion/styled';

import Header from '../header';
import Panel from '../panel';
import Maps from '../maps';

import { theme, today } from '../constants';

const Container = styled.div`
  position: absolute;
  width: 100%;
  min-width: 480px;
  height: 100%;
  min-height: 580px;
  top: 0px;
  left: 0px;
  background-color: ${theme.panelBackground};
`;

const MapHolder = styled.div`
  position: relative;
  width: 100%;
  height: 110vh;
  min-height: 500px;
  top: 0;
  clip-path: polygon(96% 0%, 100% 0%, 100% 150%,0 150%,0 70%);
  background-color: #dfd2ae;
`;

const HeaderHolder = styled.div`
  position: absolute;
  top 0px;
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 86% 0, 0 calc(180px + 6%));
  background-color: ${theme.headerBackground};
  overflow: visible;
  z-index: 10;
`;

const PanelHolder = styled.div`
  position: absolute;
  top: calc(200px - 3vw);
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
