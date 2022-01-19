import React from 'react';
import Main from './utils/Main';
import Content from './utils/Content';
import Button from './utils/Button';
import Center from './utils/Center';
import Input from './utils/Input';

function StretchingCreate() {
  return (
    <div>
      <Main>
        <Content title="일주일 스트레칭 등록">
          <Input />
          <Input label="월" />
          <Input label="화" />
          <Input label="수" />
          <Input label="목" />
          <Input label="금" />
          <Center>
            <Button text="등록 하기" />
          </Center>
        </Content>
      </Main>
    </div>
  );
}

export default StretchingCreate;
