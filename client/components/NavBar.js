import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  //the way each user profile will look in the feed
  return (
    <nav>
      <Link to='/Feed'>
        <button>FoodieFeed</button>
      </Link>
      <Link to='/Profile'>
        <button>Profile</button>
      </Link>
    </nav>
  );
};

export default Navbar;
