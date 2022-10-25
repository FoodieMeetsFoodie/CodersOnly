import { Link, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Login from './Login.js';
import SignUp from './SignUp';
import Profile from './Profile';
import Feed from './Feed';
import UpdateProfile from './components/UpdateProfile';
import Matches from './Matches';

//imported stylesheet
import './stylesheets/style.css';

//rendering profile here just for now before we add routers
const App = () => {
  const [currUser, setCurrUser] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch('/api/friends')
      .then((response) => response.json())
      .then((data) => {
        setAllUsers(data);
      });

    fetch('/api/checkSession')
      .then((response) => response.json())
      .then((data) => {
        setCurrUser(data);
      });
  }, []);

  return (
    <Routes>
      <Route
        path='/'
        element={<Login currUser={currUser} setCurrUser={setCurrUser} />}
      />
      <Route
        path='/Feed'
        element={<Feed currUser={currUser} allUsers={allUsers} />}
      />
      <Route path='/Profile' element={<Profile currUser={currUser} />} />
      <Route
        path='/Matches'
        element={<Matches currUser={currUser} allUsers={allUsers} />}
      />
    </Routes>
  );
};

// <div>
//   <div>
//     {/* <Profile/>
//     <UpdateProfile/> */}
//     <HomePage/>
//   </div>
//   {/* <Login /> */}
// </div>

export default App;

// removed /signup & /login since / is capturing both
// <Route path='/SignUp' element={<SignUp />} />
// <Route path='/Login' element={<Login />} />

// Removed homepage cause we want to feed anyways
// /* <Route path='/HomePage' element={<HomePage />} /> */

// Moving /UpdateProfile functionality to just /Profile
// <Route path='/UpdateProfile' element={<UpdateProfile />} />
