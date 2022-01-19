import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Nav from './components/utils/Nav';
import Example from './components/utils/Example';
import Home from './components/utils/Home';
import UserList from './components/UserListComponent';
import StretchingList from './components/StretchingList';
import EventList from './components/EventList';
import Detail from './components/UserSpecificity';
import StretchingCreate from './components/StretchingCreate';
import Login from './pages/Login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Example />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/user/Detail" element={<Detail />} />
        <Route path="/stretching" element={<StretchingList />} />
        <Route path="/stretching/create" element={<StretchingCreate />} />
        <Route path="/event" element={<EventList />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
