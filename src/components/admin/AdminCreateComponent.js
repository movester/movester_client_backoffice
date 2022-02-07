import React from 'react';
// import styled from 'styled-components';
import Main from '../common/Main';
import Content from '../common/Content';
import Button from '../common/elements/Button';
import Input from '../common/elements/Input';
import InputTitle from '../common/elements/InputTitle';
import Center from '../common/elements/Center';

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
