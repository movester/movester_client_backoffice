import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSelectBox = styled.div`
  select {
    min-width: 30px;
    height: 33px;
    background-size: 20px;
    padding: 5px 30px 5px 10px;
    border-radius: 10px;
    outline: 0 none;
    color: gray;
    border: 2px solid #615b5b;
  }
  select option {
    padding: 3px 0;
  }
`;

function SelectBox({ options }) {
  return (
    <StyledSelectBox>
      <select>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </StyledSelectBox>
  );
}

SelectBox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SelectBox;
