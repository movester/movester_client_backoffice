import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  text-align: left;
  margin-bottom: 10px;
`;

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

function Input({ label }) {
  return (
    <Wrapper>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledInput id={label} />
    </Wrapper>
  );
}

Input.propTypes = {
  label: PropTypes.string,
};

Input.defaultProps = {
  label: 'example',
};

export default Input;
