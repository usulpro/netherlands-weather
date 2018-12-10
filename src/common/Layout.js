import React from 'react';
import { Router, Link } from '@reach/router';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import Header from '../header';
import Panel from '../panel';

import { theme, today } from '../constants';

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
  height: 1000px;
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
          <Router>
            <Header today={this.state.today} path="/" home changeDate={this.changeDate} />
            <Header today={this.state.today} path="/cities/:city" changeDate={this.changeDate} />
          </Router>
        </HeaderHolder>
        <PanelHolder>
          <Panel today={this.state.today} />
        </PanelHolder>
      </Container>
    );
  }
}

export default Layout;
