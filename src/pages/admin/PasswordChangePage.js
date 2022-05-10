import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/defaultClient';

import PasswordChange from '../../components/admin/PasswordChange';
import passwordRegex from '../../util/passwordRegex';

function PasswordChangePage() {
  const adminIdx = useSelector(state => state.auth.admin?.adminIdx);
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    beforePassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const { beforePassword, newPassword, confirmPassword } = inputs;
  const [passwordCurMessage, setCurPasswordMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  const onChange = e => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });

    if (name === 'beforePassword') {
      setCurPasswordMessage(
        passwordRegex.test(value) ? '' : '영문, 숫자를 반드시 포함하여 8자리 이상 20자리 이하로 입력해주세요.',
      );
    } else if (name === 'newPassword') {
      setPasswordMessage(
        passwordRegex.test(value) ? '' : '영문, 숫자를 반드시 포함하여 8자리 이상 20자리 이하로 입력해주세요.',
      );
    } else if (name === 'confirmPassword') {
      setPasswordConfirmMessage(value === newPassword ? '' : '비밀번호 확인이 일치하지 않습니다.');
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (!passwordRegex.test(beforePassword) || !passwordRegex.test(newPassword) || confirmPassword !== newPassword) return;
    try {
      const { data } = await axios.patch(`admins/password/${adminIdx}`, {
        beforePassword,
        newPassword,
        confirmPassword,
      });

      if (data.success) {
        navigate('/');
      }
    } catch (err) {
      setInputs({
        beforePassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  return (
    <PasswordChange
      beforePassword={beforePassword}
      newPassword={newPassword}
      confirmPassword={confirmPassword}
      passwordCurMessage={passwordCurMessage}
      passwordMessage={passwordMessage}
      passwordConfirmMessage={passwordConfirmMessage}
      onChange={onChange}
      onSubmit={onSubmit}
      errModalOn={errModalOn}
      handleErrModal={handleErrModal}
      errMsg={errMsg}
    />
  );
}

export default PasswordChangePage;
