import React from 'react';
import styled from '@emotion/styled';
import { Query } from 'react-apollo';

import query from './cities.gql';
import CityItem from './CityItem';

const InnerContainer = styled.div`
  background-color: #ececec;
  border: #ececec solid 2px;
  margin: 4px;
  border-radius: 8px;
  height: ${props => (props.height ? `${props.height}px` : '30px')};
  display: flex;
  flex-direction: column;
  flex-grow: ${props => (props.height ? 0 : 1)};
  `;

const Holder = styled.ul`
  padding: 0px;
  margin: 0px;
  overflow-y: auto;
`;

const Input = styled.div`
margin: 2px;
height: 1px;
display: flex;
flex-grow: 1;
  & input {
    width: 100%;
    border-radius: 5px;
    border: none;
    padding: 6px;
    font-size: 14px;
  }
  & button {
    background-color: #336da7;
    color: white;
    border: none;
    border-radius: 4px;
    margin-left: 6px;
  }
`;

class CityList extends React.Component {
  state = {
    city: undefined,
  };
  handleChange = ev => {
    const city = ev.target.value;
    this.setState({ city });
  };
  render() {
    const { today } = this.props;
    const { city } = this.state;
    return (
      <>
        <InnerContainer height={38}>
          <Input>
            <input
              type="text"
              onChange={this.handleChange}
              value={city || ''}
            />
            <button onClick={() => this.setState({city: undefined})}>Reset</button>
          </Input>
        </InnerContainer>
        <Query query={query} variables={{ today, city }}>
          {({ data: { cities }, loading }) => {
            if (loading) return <InnerContainer>{'loading...'}</InnerContainer>;
            return (
              <InnerContainer>
                <Holder>
                  {cities.map((city, id) => (
                    <CityItem city={city} key={id} />
                  ))}
                </Holder>
              </InnerContainer>
            );
          }}
        </Query>
      </>
    );
  }
}

export default CityList;
