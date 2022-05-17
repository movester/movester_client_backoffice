import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ModalPortal from '../common/Modal/ModalPortal';
import ConfirmModal from '../common/Modal/ConfirmModal';

function Login({ onChange, onSubmit, id, password, errModalOn, handleErrModal, errMsg }) {
  return (
    <StyledLoginBackground>
      <StyledLoginBlock onSubmit={onSubmit}>
        <img src="/assets/images/movester-background.png" alt="logo" className="logo" />
        <h2>로그인</h2>
        <input type="text" name="id" value={id} placeholder="아이디" autoComplete="on" onChange={onChange} />
        <input type="password" name="password" value={password} placeholder="비밀번호" autoComplete="on" onChange={onChange} />
        <button type="submit">로그인 하기</button>
      </StyledLoginBlock>
      <ModalPortal>
        {errModalOn && <ConfirmModal onClose={handleErrModal} title="로그인 실패" content={errMsg} />}
      </ModalPortal>
    </StyledLoginBackground>
  );
}

Login.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errModalOn: PropTypes.bool.isRequired,
  handleErrModal: PropTypes.func.isRequired,
  errMsg: PropTypes.string.isRequired,
};

export default Login;

const StyledLoginBackground = styled.div`
  height: 100vh;
  background-color: #6d66aa;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoginBlock = styled.form`
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
