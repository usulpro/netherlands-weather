import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import dayjs from 'dayjs';

const Date = styled.div`
  color: white;
  opacity: 0.8;
  font-size: 18px;
  font-family: sans-serif;
  margin-bottom: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  & span {
    visibility: hidden;
    margin-left: 8px;
    font-size: 14px;
    opacity: 0.8;
  }
  &:hover {
    span {
      visibility: visible;

    }
  }
`;

class DateInput extends React.Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  };
  static defaultProps = {
    onChange: () => {},
  };

  state = {
    isEdit: false,
  };

  handleChange = ev => {
    const date = ev.target.value;
    const dateIso = dayjs(date).toISOString();

    this.setState({ isEdit: false }, () => {
      this.props.onChange(dateIso);
    });
  };

  render() {
    const { date } = this.props;
    const { isEdit } = this.state;
    return (
      <Date onClick={() => this.setState({ isEdit: true })}>
        {!isEdit ? (
          dayjs(date).format('DD MMM YYYY')
        ) : (
          <input
            value={dayjs(date).format('YYYY-MM-DD')}
            type="date"
            onChange={this.handleChange}
          />
        )}
        {!isEdit && <span>select</span>}
      </Date>
    );
  }
}

export default DateInput;
