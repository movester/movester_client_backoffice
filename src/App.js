import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import NavComponent from './components/utils/Nav';
import ExampleComponent from './components/utils/Example';
import HomeComponent from './components/utils/Home';
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
