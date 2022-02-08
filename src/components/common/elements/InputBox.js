import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function InputBox({ type, children }) {
  return <StyledBox className={type}>{children}</StyledBox>;
}

InputBox.propTypes = {
  type: PropTypes.string,
  children: PropTypes.element.isRequired,
};

InputBox.defaultProps = {
  type: '',
};

export default InputBox;

const StyledBox = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;

  &.half {
    width: 30%;
  }
`;
