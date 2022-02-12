import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from '../../lib/defaultClient';
import Main from '../common/Main';
import Content from '../common/Content';
import Button from '../common/elements/Button';
import Input from '../common/elements/Input';
import InputTitle from '../common/elements/InputTitle';
import Center from '../common/elements/Center';
import useInputs from '../../hooks/useInputs';

function AdminCreateComponent() {
  const navigate = useNavigate();
  const [err, setErr] = useState();
  const [{ id, name, password }, onChange, reset] = useInputs({
    id: '',
    name: '',
    password: '',
  });

  const registerAdmin = async () => {
    try {
      await axios.post('/admins/join', {
        id,
        name,
        password,
        rank: 0,
      });
      alert('새로운 admin 사용자가 등록되었습니다.');
      navigate('/admin');
    } catch (error) {
      setErr(error);
    }
  };

  useEffect(() => reset(), []);

  return (
    <Main>
      {err ? (
        <h1>{err}</h1>
      ) : (
        <Content title="관리자 계정 등록">
          <InputTitle text="아이디" />
          <Input text="아이디" name="id" value={id} onChange={onChange} />
          <InputTitle text="닉네임" />
          <Input text="닉네임" name="name" value={name} onChange={onChange} />
          <InputTitle text="임시 비밀번호" />
          <Input type="password" text="비밀번호" name="password" value={password} onChange={onChange} />
          <Center>
            <Button text="등록하기" click={registerAdmin} />
          </Center>
        </Content>
      )}
    </Main>
  );
}

export default AdminCreateComponent;
