import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Button({ text }) {
  return <StyledButton>{text}</StyledButton>;
}

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: '제출하기',
};

export default Button;

const StyledButton = styled.div`
  box-sizing: border-box;
  width: 33%;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  background-color: ${({ theme }) => theme.lightPurple};
  border-radius: 10px;
  font-size: 20px;
  color: #ffffff;
  font-weight: 700;
  margin-top: 40px;
  text-align: center;
  cursor: pointer;
`;
