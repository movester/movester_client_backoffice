import React from 'react';
import styled from 'styled-components';

const StyledLoginBackground = styled.div`
  height: 100vh;
  background-image: url('/assets/images/movester-background.png');
  background-size: 25%;
  background-color: #6d66aa;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoginBlock = styled.div`
  width: 412px;
  height: 318px;
  background-color: #8b8694;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
  }

  input {
    width: 380px;
    height: 45px;
    background-color: rgba(229, 229, 229, 0.6);
    border: none;
    border-radius: 15px;
    padding: 5px;
  }

  input + input {
    margin: 8px;
  }

  button {
    width: 380px;
    height: 45px;
    border-radius: 15px;
    background-color: #6a5cb7;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }
`;

const LoginComponent = () => (
  <StyledLoginBackground>
    <StyledLoginBlock>
      <h2>로그인</h2>
      <input type="email" name="email" placeholder="이메일" />
      <input tpye="password" name="password" placeholder="비밀번호" />
      <button type="button">로그인 하기</button>
    </StyledLoginBlock>
  </StyledLoginBackground>
);

export default LoginComponent;
