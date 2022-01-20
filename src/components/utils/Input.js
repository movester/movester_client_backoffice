import React from 'react';
import styled from 'styled-components';

function Input() {
  return <StyledInput />;
}

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
