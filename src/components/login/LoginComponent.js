import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import fetchAdminLogin from '../../store/admin/adminThunk';

const LoginComponent = () => {
  const dispatch = useDispatch();
  const [err, setErr] = useState('');

  const onClick = async () => {
    try {
      const originalPromiseResult = await dispatch(
        fetchAdminLogin({
          id: 'admin1',
          password: 'admin12',
        }),
      ).unwrap();
      console.log(originalPromiseResult);
    } catch ({ error }) {
      setErr(error);
    }
  };
  return (
    <StyledLoginBackground>
      {err ? (
        <h1>{err}</h1>
      ) : (
        <StyledLoginBlock>
          <img src="../assets/images/movester-background.png" alt="logo" className="logo" />
          <h2>로그인</h2>
          <input type="text" name="id" placeholder="아이디" />
          <input type="password" name="password" placeholder="비밀번호" />
          <button type="button" onClick={onClick}>
            로그인 하기
          </button>
        </StyledLoginBlock>
      )}
    </StyledLoginBackground>
  );
};

export default LoginComponent;

const StyledLoginBackground = styled.div`
  height: 100vh;
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

  .logo {
    width: 250px;
  }

  h2 {
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    margin: 20px;
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
