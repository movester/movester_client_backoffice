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

// TODO: width 85vw 주면 스크롤 시에 스크롤 width랑 오버나서 컴포넌트가 아래로 밀림
const Wrapper = styled.div`
  width: 83vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.lightGray};
  display: inline-block;
  padding: 5%;
`;