import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Nav from './components/common/Nav';
import Example from './components/common/Example';
import Home from './components/common/Home';
import UserList from './components/user/UserListComponent';
import UserDetail from './components/user/UserDetailComponent';
import StretchingList from './components/stretching/StretchingListComponent';
import StretchingCreate from './components/stretching/StretchingCreateComponent';
import RegisterStretching from './components/stretching/RegisterStretching';
import WeeklyStretchingList from './components/stretching/WeeklyStretchingList';
import RegisterEventPage from './pages/event/RegisterEventPage';
import EventList from './components/event/EventListComponent';
import EventDetail from './components/event/EventDetail';

import AdminCreate from './components/admin/AdminCreateComponent';
import UpdatePassword from './components/admin/UpdatePassword';
import AdminListPage from './pages/admin/AdminListPage';
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
        <Route path="/user/:no" element={<UserDetail />} />
        <Route path="/stretching" element={<StretchingList />} />
        <Route path="/stretching/create" element={<RegisterStretching />} />
        <Route path="/stretching/weekly" element={<WeeklyStretchingList />} />
        <Route path="/stretching/weekly/create" element={<StretchingCreate />} />
        <Route path="/event" element={<EventList />} />
        <Route path="/event/create" element={<RegisterEventPage />} />
        <Route path="/event/1" element={<EventDetail />} />
        <Route path="/admin" element={<AdminListPage />} />
        <Route path="/admin/create" element={<AdminCreate />} />
        <Route path="/admin/update" element={<UpdatePassword />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
