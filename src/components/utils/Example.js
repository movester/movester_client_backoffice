import React from 'react';
import Main from './Main';
import Content from './Content';
import Button from './Button';
import Input from './Input';
import WhiteButton from './WhiteButton';

function Example() {
  return (
    <Main>
      <Content title="사용자 리스트">
        {/* defaultProps = "90" */}
        <WhiteButton />
        <WhiteButton size="500" />
        <Input />
        <Input label="제목" />
        {/* defaultProps = "제출하기" */}
        <Button text="예시 텍스트" />
      </Content>
      <Content title="사용자 리스트" />
    </Main>
  );
}

export default Example;
