import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Nav from './components/utils/Nav';
import Example from './components/utils/Example';
import Home from './components/utils/Home';
import UserList from './components/UserListComponent';
import StretchingComponent from './components/StretchingComponent';
import EventComponent from './components/EventComponent';
import Detail from './components/UserSpecificity';
import StretchingCreate from './components/StretchingCreate';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Example />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/user/Detail" element={<Detail />} />
        <Route path="/stretching" element={<StretchingComponent />} />
        <Route path="/stretching/create" element={<StretchingCreate />} />
        <Route path="/event" element={<EventComponent />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
