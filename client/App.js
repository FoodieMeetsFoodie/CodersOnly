import { Link, Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './Login.js';
import SignUp from './SignUp';
import Profile from './Profile';
import UpdateProfile from './UpdateProfile';
import Feed from './Feed';

//imported stylesheet
import './style.css';

//rendering profile here just for now before we add routers
const App = () => {
  return (
    // <Routes>
    //   <Route path='/' element={<Login /> }/>
    //   <Route path='/SignUp' element={<SignUp /> }/>
    //   <Route path='/Login' element={<Login /> }/>
    //   <Route path='/Feed' element={<Feed /> }/>
    //   <Route path='/Profile' element={<Profile /> }/>
    //   <Route path='/UpdateProfile' element={<UpdateProfile /> }/>
    // </Routes>
    <div>
      <div>
        {/* <Profile/>
        <UpdateProfile/> */}
        <Feed/>
      </div>
      {/* <Login /> */}
    </div>
  );
};

export default App;
