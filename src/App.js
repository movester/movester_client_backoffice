import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NavComponent from './components/utils/NavComponent';
import MainComponent from './components/utils/MainComponent';
import ContentComponent from './components/utils/ContentComponent';
import ButtonComponent from './components/utils/ButtonComponent';
import InputComponent from './components/utils/InputComponent'

const ExampleContent = styled.div`
  width: 100%;
  height: 160px;
  background-color: #c4c4c4;
  margin-bottom: 30px;
`;

// TODO: palette 적용
function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          lightPurple: '#948fbf',
          darkPulple: '#2a1598',
          lightGray: '#efefef',
          darkGray: '#c4c4c4',
          black: '#000000',
        },
      }}
    >
      <div className="App">
        {/* util 컴포넌트 사용 예시 */}
        <NavComponent />
        <MainComponent>
          <ContentComponent title="사용자 리스트">
            <ExampleContent />
            <InputComponent />
            <InputComponent label="제목"/>
            {/* defaultProps = "제출하기" */}
            <ButtonComponent text="예시 텍스트" />
          </ContentComponent>
          <ContentComponent title="사용자 리스트">
            <ExampleContent />
          </ContentComponent>
        </MainComponent>
      </div>
    </ThemeProvider>
  );
}

export default App;
