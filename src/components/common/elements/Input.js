import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Input({ text = '', ...rest }) {
  return <StyledInput placeholder={text} {...rest} />;
}

Input.propTypes = {
  text: PropTypes.string,
};
Input.defaultProps = {
  text: '',
};

export default Input;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0 10px;
  line-height: 40px;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.darkPulple};
  }
`;
