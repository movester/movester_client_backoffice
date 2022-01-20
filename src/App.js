import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Nav from './components/utils/Nav';
import Example from './components/utils/Example';
import Home from './components/utils/Home';
import UserList from './components/UserListComponent';
import StretchingList from './components/StretchingListComponent';
import EventList from './components/EventListComponent';
import UserDetail from './components/UserDetailComponent';
import StretchingCreate from './components/StretchingCreateComponent';
import Login from './pages/Login';
import RegisterStretching from './components/stretching/RegisterStretching';
import WeeklyStretchingList from './components/stretching/WeeklyStretchingList';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Example />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/user/Detail" element={<UserDetail />} />
        <Route path="/stretching" element={<StretchingList />} />
        <Route path="/stretching/create" element={<RegisterStretching />} />
        <Route path="/stretching/weekly" element={<WeeklyStretchingList />} />
        <Route path="/stretching/weekly/create" element={<StretchingCreate />} />
        <Route path="/event" element={<EventList />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
