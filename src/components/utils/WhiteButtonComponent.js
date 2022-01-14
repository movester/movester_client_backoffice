import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// TODO: props.size 적용 안됨
const StyledButton = styled.div`
  width: ${props => props.size || 90}px;
  height: 30px;
  line-height: 26px;
  display: inline-block;
  background-color: #ffffff;
  border-radius: 10px;
  font-size: 18px;
  color: #2a1598;
  font-weight: 700;
  text-align: center;
  border: 2px solid #2a1598;
  cursor: pointer;
`;

const WhiteButtonComponent = ({ text }) => <StyledButton>{text}</StyledButton>;

WhiteButtonComponent.propTypes = {
  text: PropTypes.string,
};

WhiteButtonComponent.defaultProps = {
  text: '검색',
};

export default WhiteButtonComponent;
