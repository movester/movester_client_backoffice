import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Input({ text = '', onKeyPress, name }) {
  return <StyledInput name={name} onKeyPress={onKeyPress} placeholder={text} />;
}

Input.propTypes = {
  text: PropTypes.string,
  onKeyPress: PropTypes.func,
  name: PropTypes.string,
};
Input.defaultProps = {
  text: '',
  onKeyPress: () => {},
  name: '',
};

export default Input;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0 10px;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.darkPulple};
  }
`;
