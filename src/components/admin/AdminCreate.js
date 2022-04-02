import React from 'react';
import PropTypes from 'prop-types';

import Main from '../common/Main';
import Content from '../common/Content';
import Button from '../common/button/Button';
import Input from '../common/elements/Input';
import InputTitle from '../common/elements/InputTitle';
import Center from '../common/elements/Center';

function AdminCreate({ id, name, password, onChange, onSubmit }) {
  return (
    <Main>
      <Content title="관리자 계정 등록">
        <InputTitle text="아이디" />
        <Input text="아이디" name="id" value={id} onChange={onChange} />
        <InputTitle text="닉네임" />
        <Input text="닉네임" name="name" value={name} onChange={onChange} />
        <InputTitle text="임시 비밀번호" />
        <Input type="password" text="비밀번호" name="password" value={password} onChange={onChange} />
        <Center>
          <Button text="등록하기" click={onSubmit} />
        </Center>
      </Content>
    </Main>
  );
}

AdminCreate.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default AdminCreate;
