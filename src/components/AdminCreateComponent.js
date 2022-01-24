import React from 'react';
// import styled from 'styled-components';
import Main from './utils/Main';
import Content from './utils/Content';
import Button from './utils/Button';
import Input from './utils/Input';
import InputTitle from './utils/InputTitle';
import Center from './utils/Center';

function AdminCreateComponent() {
  return (
    <Main>
      <Content title="관리자 계정 등록">
        <InputTitle text="아이디" />
        <Input />
        <InputTitle text="닉네임" />
        <Input />
        <InputTitle text="임시 비밀번호" />
        <Input />
        <Center>
          <Button text="등록하기" />
        </Center>
      </Content>
    </Main>
  );
}

export default AdminCreateComponent;
