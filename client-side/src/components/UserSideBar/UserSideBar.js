import React from 'react';
import { Link } from 'react-router-dom';

const UserSideBar = () => {
  return (
    <div>
      <Link>
        <h4>Book</h4>
      </Link>
      <Link>
        <h4>Booking List</h4>
      </Link>
      <Link to="/SetReview">
        <h4>Review</h4>
      </Link>
    </div>
  );
};

export default UserSideBar;
