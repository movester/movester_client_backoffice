import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Main({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;

const Wrapper = styled.div`
  width: 85vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.lightGray};
  display: inline-block;
  padding: 5%;
`;
