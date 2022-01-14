import React from 'react';
import MainComponent from './MainComponent';
import ContentComponent from './ContentComponent';
import ButtonComponent from './ButtonComponent';
import InputComponent from './InputComponent';
import WhiteButtonComponent from './WhiteButtonComponent';

const ExampleComponent = () => (
  <MainComponent>
    <ContentComponent title="사용자 리스트">
      {/* defaultProps = "90" */}
      <WhiteButtonComponent />
      <WhiteButtonComponent size="500" />
      <InputComponent />
      <InputComponent label="제목" />
      {/* defaultProps = "제출하기" */}
      <ButtonComponent text="예시 텍스트" />
    </ContentComponent>
    <ContentComponent title="사용자 리스트" />
  </MainComponent>
);

export default ExampleComponent;
