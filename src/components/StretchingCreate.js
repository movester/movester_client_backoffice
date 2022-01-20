import React from 'react';
import Main from './utils/Main';
import Content from './utils/Content';
import Button from './utils/Button';
import Center from './utils/Center';
import InputTitle from './utils/InputTitle';
import Input from './utils/Input';

function StretchingCreate() {
  return (
    <div>
      <Main>
        <Content title="일주일 스트레칭 등록">
          <InputTitle text="월" />
          <Button text="스트레칭 검색" type="stretching"/>
          <Input />
          <InputTitle text="화" />
          <Input />
          <InputTitle text="수" />
          <Input />
          <InputTitle text="목" />
          <Input />
          <InputTitle text="금" />
          <Input />
          <InputTitle text="토" />
          <Input />
          <InputTitle text="일" />
          <Input />
          <Center>
            <Button text="등록 하기" />
          </Center>
        </Content>
      </Main>
    </div>
  );
}

export default StretchingCreate;
