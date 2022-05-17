import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 83vw;
  min-height: 100vh;
  background-color: #efefef;
  display: inline-block;
  padding: 5%;
`;

function Home() {
  const { isAuth } = useSelector(({ auth }) => ({
    isAuth: auth.isAuth,
  }));
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) navigate('/login');
  }, [isAuth]);
  return (
    <Wrapper>
      <h1>홈</h1>
      <p>이곳은 홈이에요. 가장 먼저 보여지는 페이지죠.</p>
    </Wrapper>
  );
}

export default Home;
