import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.div`
  width: 33%;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  background-color: #948fbf;
  border-radius: 10px;
  font-size: 20px;
  color: #ffffff;
  font-weight: 700;
  margin-top: 40px;
  text-align: center;
`;

const ButtonComponent = ({ text }) => <StyledButton>{text}</StyledButton>;

ButtonComponent.propTypes = {
  text: PropTypes.string,
};

ButtonComponent.defaultProps = {
  text: '제출하기',
};

export default ButtonComponent;
