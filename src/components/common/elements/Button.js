import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Button({ text, type, click }) {
  return (
    <StyledButton onClick={click} className={type}>
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  click: PropTypes.func,
};

Button.defaultProps = {
  text: '제출하기',
  type: '',
  click: () => {},
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

  &.search {
    width: 90px;
    height: 30px;
    line-height: 26px;
    background-color: #ffffff;
    font-size: 18px;
    color: ${({ theme }) => theme.darkPulple};
    border: 2px solid ${({ theme }) => theme.darkPulple};
    margin: 0;
  }

  &.stretching {
    float: left;
    width: 200px;
    height: 40px;
    line-height: 40px;
    background-color: ${({ theme }) => theme.darkGray};
    font-size: 18px;
    color: #000000;
    margin: 0;
  }

  & + & {
    margin-left: 10%;
  }
`;
