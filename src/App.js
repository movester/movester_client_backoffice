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
import RegisterEventPage from './pages/event/RegisterEventPage';
import EventDetail from './components/event/EventDetail';
import AdminList from './components/AdminListComponent';
import AdminCreate from './components/AdminCreateComponent';

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
