import { Link, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Login from './Login.js';
import SignUp from './SignUp';
import Profile from './Profile';
import Feed from './Feed';
import UpdateProfile from './components/UpdateProfile';
import Matches from './Matches';
import useToken from './useToken';

//imported stylesheet
import './stylesheets/style.css';

//rendering profile here just for now before we add routers
const App = () => {
  const { setToken, removeToken } = useToken();
  const token = JSON.parse(localStorage.getItem('token'));
  const [currUser, setCurrUser] = useState(token);
  const [allUsers, setAllUsers] = useState([]);


  useEffect(() => {
    fetch('/api/friends')
      .then((response) => response.json())
      .then((data) => {
        setAllUsers(data);
      });
  }, []);

  if (!token) {
    return(

      <Routes>
        <Route exact path="/" element={<Login setCurrUser={setCurrUser} setToken={setToken} currUser={currUser} />} />
        <Route exact path='/Feed' element={<Login setToken={setToken} /> } />
        <Route exact path='/Matches' element={<Login setToken={setToken} /> } />
        <Route exact path="/Profile" element={<Login setToken={setToken} /> } />
      </Routes>

    ) 
  }

  return (
    
    <Routes>
      {/*<Route
        path='/'
        element={<Login setCurrUser={setCurrUser} setToken={setToken} currUser={currUser} />}
        />*/}
      <Route
        path='/'
        element={<Feed setCurrUser={setCurrUser} removeToken={removeToken} currUser={currUser} allUsers={allUsers} />}
      />
      <Route
        exact path='/Feed'
        element={<Feed setCurrUser={setCurrUser} removeToken={removeToken} currUser={currUser} allUsers={allUsers} />}
      />
      <Route exact path='/Profile' element={<Profile removeToken={removeToken} currUser={currUser} />} />
      <Route
        exact path='/Matches'
        element={<Matches currUser={currUser} removeToken={removeToken} allUsers={allUsers} />}
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
