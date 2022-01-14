import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import NavComponent from './components/utils/NavComponent';
import ExampleComponent from './components/utils/ExampleComponent';
import HomeComponent from './components/utils/HomeComponent';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/test" element={<ExampleComponent />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
