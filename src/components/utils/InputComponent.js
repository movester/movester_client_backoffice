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
    outline: 1px solid #2a1598;
  }
`;

const InputComponent = ({ label }) => (
  <Wrapper>
    <StyledLabel htmlFor={label}>{label}</StyledLabel>
    <StyledInput id={label} />
  </Wrapper>
);

InputComponent.propTypes = {
  label: PropTypes.string,
};

InputComponent.defaultProps = {
  label: 'example',
};

export default InputComponent;
