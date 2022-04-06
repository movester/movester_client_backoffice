import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function SelectBox({ options, color, name, ...rest }) {
  return (
    <StyledSelectBox name={name} color={color} {...rest}>
      {options.map((option) => (
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
  width: 180px;
  height: 33px;
  background-color: #efefef;
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

  & + & {
    margin-left: 30px;
  }
`;
