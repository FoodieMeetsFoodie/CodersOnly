import React from 'react';
import Profile from './Profile';
import Login from './Login.js';

//imported stylesheet
import './style.css';
import UpdateProfile from './UpdateProfile';

//rendering profile here just for now before we add routers
const App = () => {
  return (
    <div>
      <p>STAR Mole</p>
      <div>
        <Profile/>
        <UpdateProfile/>
      </div>
      <Login />
    </div>
  );
};

export default App;
