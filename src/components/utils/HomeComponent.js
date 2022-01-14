import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 83vw;
  min-height: 100vh;
  background-color: #efefef;
  display: inline-block;
  padding: 5%;
`;

const HomeComponent = () => (
  <Wrapper>
    <h1>홈</h1>
    <p>이곳은 홈이에요. 가장 먼저 보여지는 페이지죠.</p>
  </Wrapper>
);

export default HomeComponent;
