import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function InputTitle({ text }) {
  return <StyledTitle>{text}</StyledTitle>;
}

InputTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InputTitle;

const StyledTitle = styled.p`
  display: block;
  font-size: 20px;
  color: #000000;
  font-weight: 700;
  text-align: left;
  margin: 30px 0 10px 0;

  &:first-of-type {
    margin-top: 0;
  }
`;
