import React from 'react';
import Profile from './Profile';
import Login from './Login.js';

//imported stylesheet
import './style.css';
import UpdateProfile from './UpdateProfile';
import { Route, Routes } from 'react-router-dom';

//rendering profile here just for now before we add routers
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dog' element={<Profile />} />
    </Routes>
  );
};

export default App;
