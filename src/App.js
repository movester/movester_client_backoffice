import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import NavComponent from './components/utils/NavComponent';
import MainComponent from './components/utils/MainComponent';
import ContentContainer from './components/utils/ContentContainer';

const ExampleContent = styled.div`
  width: 100%;
  height: 160px;
  background-color: #c4c4c4;
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
        <NavComponent />
        <MainComponent>
          <ContentContainer title="사용자 리스트">
            <ExampleContent />
          </ContentContainer>
        </MainComponent>
      </div>
    </ThemeProvider>
  );
}

export default App;
