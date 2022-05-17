import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Year({ Date, prev, next }) {
  return (
    <StyledYear>
      <StyledButton onClick={prev}>&lt;</StyledButton> {Date} <StyledButton onClick={next}>&gt;</StyledButton>
    </StyledYear>
  );
}

Year.propTypes = {
  Date: PropTypes.number.isRequired,
  prev: PropTypes.func,
  next: PropTypes.func,
};
Year.defaultProps = {
  prev: () => {},
  next: () => {},
};

export default Year;

const StyledYear = styled.p`
  font-weight: bold;
  font-size: 24px;
`;

const StyledButton = styled.button`
  font-size: 24px;
`;
