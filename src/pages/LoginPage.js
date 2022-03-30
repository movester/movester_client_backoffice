import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Login from '../components/login/Login';
import { fetchLoginThunk } from '../store/auth/authAsyncThunk';

function LoginPage() {
  const { isAuth } = useSelector(state => state.auth);
  const isError = useSelector(state => state.auth.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    id: '',
    password: '',
  });

  const { id, password } = inputs;

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleErrModal = () => {
    setErrModalOn(prev => !prev);
  };

  const onChange = e => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(fetchLoginThunk({ id, password }));
  };

  useEffect(() => {
    if (isError) {
      setInputs({
        id: '',
        password: '',
      });
      const errMsg = isError.error || '잘못된 이메일, 혹은 비밀번호입니다.';

      setErrModalOn(prev => !prev);
      setErrMsg(errMsg);
    }
  }, [isError]);

  useEffect(() => {
    if (isAuth) navigate('/');
  }, [isAuth]);

  return (
    <Login
      onChange={onChange}
      onSubmit={onSubmit}
      id={id}
      password={password}
      errModalOn={errModalOn}
      handleErrModal={handleErrModal}
      errMsg={errMsg}
    />
  );
}

export default LoginPage;
