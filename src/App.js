import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import Nav from './components/common/Nav';
import UserList from './components/user/UserListComponent';
import UserDetail from './components/user/UserDetailComponent';
import StretchingList from './components/stretching/StretchingListComponent';
import StretchingCreate from './components/stretching/StretchingCreateComponent';
import RegisterStretching from './components/stretching/RegisterStretching';
import WeeklyStretchingList from './components/stretching/WeeklyStretchingList';
import RegisterEventPage from './pages/event/RegisterEventPage';
import EventList from './components/event/EventListComponent';
import EventDetail from './components/event/EventDetail';

import AdminCreatePage from './pages/admin/AdminCreatePage';
import PasswordChangePage from './pages/admin/PasswordChangePage';
import AdminListPage from './pages/admin/AdminListPage';
import LoginPage from './pages/admin/LoginPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/login" element={<LoginPage />} />
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
        <Route path="/admin/create" element={<AdminCreatePage />} />
        <Route path="/admin/updatePassword" element={<PasswordChangePage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default React.memo(App);
