import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Nav from './components/common/Nav';
import Example from './components/common/Example';
import Home from './components/common/Home';
import Login from './components/login/LoginComponent';
import UserList from './components/user/UserListComponent';
import UserDetail from './components/user/UserDetailComponent';
import StretchingList from './components/stretching/StretchingListComponent';
import StretchingCreate from './components/stretching/StretchingCreateComponent';
import RegisterStretching from './components/stretching/RegisterStretching';
import WeeklyStretchingList from './components/stretching/WeeklyStretchingList';
import RegisterEventPage from './pages/event/RegisterEventPage';
import EventList from './components/event/EventListComponent';
import EventDetail from './components/event/EventDetail';
import AdminList from './components/admin/AdminListComponent';
import AdminCreate from './components/admin/AdminCreateComponent';

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
        <Route path="/event/create" element={<RegisterEventPage />} />
        <Route path="/event/1" element={<EventDetail />} />
        <Route path="/admin" element={<AdminList />} />
        <Route path="/admin/create" element={<AdminCreate />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
