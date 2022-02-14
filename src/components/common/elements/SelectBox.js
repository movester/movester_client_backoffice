import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

function SelectBox({ options, color, name, ...rest }) {
  return (
    <StyledSelectBox name={name} color={color} {...rest}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </StyledSelectBox>
  );
}

SelectBox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  color: PropTypes.string,
  name: PropTypes.string,
};
SelectBox.defaultProps = {
  color: 'darkGray',
  name: '',
};

export default SelectBox;
const StyledSelectBox = styled.select`
  height: 33px;
  ${({ theme, color }) => {
    const selected = theme[color] ? theme[color] : 'white';
    return css`
      background-color: ${selected};
    `;
  }}
  background-size: 20px;
  padding: 5px 30px;
  border-radius: 10px;
  outline: 0 none;
  color: #000000;
  border: 2px solid #615b5b;
  text-align: left;
  font-weight: bold;
  option {
    padding: 3px 0;
  }
`;
