import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import NavComponent from './components/utils/NavComponent';
import ExampleComponent from './components/utils/ExampleComponent';
import HomeComponent from './components/utils/HomeComponent';
import UserList from './components/UserListComponent';
import StretchingComponent from './components/StretchingComponent';
import EventComponent from './components/EventComponent';
import UserSpecificity from './components/UserSpecificity';
import StretchingAdd from './components/StretchingAdd';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/test" element={<ExampleComponent />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/userDetail" element={<UserSpecificity />} />
        <Route path="/stretchingList" element={<StretchingComponent />} />
        <Route path="/event" element={<EventComponent />} />
        <Route path="/StretchingAdd" element={<StretchingAdd />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
