import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Nav from './components/utils/Nav';
import Example from './components/utils/Example';
import Home from './components/utils/Home';
import UserList from './components/UserListComponent';
import Login from './pages/Login';
// import StretchingComponent from './components/StretchingComponent';
// import EventComponent from './components/EventComponent';
// import UserSpecificity from './components/UserSpecificity';
// import StretchingAdd from './components/StretchingAdd';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Example />} />
        {/* <Route path="/userDetail" element={<UserSpecificity />} />
        <Route path="/stretchingList" element={<StretchingComponent />} />
        <Route path="/event" element={<EventComponent />} />
        <Route path="/StretchingAdd" element={<StretchingAdd />} /> */}
        <Route path="/user" element={<UserList />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
