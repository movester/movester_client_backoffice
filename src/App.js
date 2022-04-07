import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import Nav from './components/common/Nav';
import UserList from './components/user/UserListComponent';
import UserDetail from './components/user/UserDetailComponent';

import StretchingListPage from './pages/stretching/StretchingListPage';
import StretchingDetailPage from './pages/stretching/StretchingDetailPage';
import CreateStretchingPage from './pages/stretching/CreateStretchingPage';

import WeekStretchingListPage from './pages/weekStretching/WeekStretchingListPage';
import CreateWeekStretchingPage from './pages/weekStretching/CreateWeekStretchingPage';
import WeekStretchingDetailPage from './pages/weekStretching/WeekStretchingDetailPage';

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

        <Route path="/stretching" element={<StretchingListPage />} />
        <Route path="/stretching/:idx" element={<StretchingDetailPage />} />
        <Route path="/stretching/create" element={<CreateStretchingPage />} />

        <Route path="/weekStretching" element={<WeekStretchingListPage />} />
        <Route path="/weekStretching/create" element={<CreateWeekStretchingPage />} />
        <Route path="/weekStretching/:idx" element={<WeekStretchingDetailPage />} />


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
