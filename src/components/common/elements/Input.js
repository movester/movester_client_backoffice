import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Input({ text = '', message, ...rest }) {
  return (
    <>
      <StyledInput placeholder={text} {...rest} />
      <StyledP>{message}</StyledP>
    </>
  );
}

Input.propTypes = {
  text: PropTypes.string,
  message: PropTypes.string,
};
Input.defaultProps = {
  text: '',
  message: '',
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

const StyledP = styled.p`
  font-size: 12px;
  color: red;
  padding-left: 12px;
  margin: 5px 0 8px 0;
  text-align: left;
`;
