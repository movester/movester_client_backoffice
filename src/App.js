import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import NavComponent from './components/utils/Nav';
import ExampleComponent from './components/utils/Example';
import HomeComponent from './components/utils/Home';
import theme from './theme';
import RegisterStretching from './components/stretching/RegisterStretching';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/test" element={<ExampleComponent />} />
        <Route path="/stretching/register" element={<RegisterStretching />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
