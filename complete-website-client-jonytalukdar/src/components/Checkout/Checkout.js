import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import ProcessPayment from '../PaymentProcess/PaymentProcess';
import UserSideBar from '../UserSideBar/UserSideBar';

const CheckOut = () => {
  const { _id } = useParams();
  const [checkout, setCheckout] = useState([]);
  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch(`https://arcane-shelf-91213.herokuapp.com/books/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setCheckout(data);
      });
  }, []);

  return (
    <div className="mt-3" style={{ textAlign: 'center' }}>
      <div className="row">
        <div className="col-md-4">
          <UserSideBar></UserSideBar>
        </div>
        <div className="col-md-8">
          <form>
            <input
              className="form-control w-50 mb-2"
              placeholder="Name"
              type="text"
            />
            <input
              className="form-control w-50 mb-2"
              placeholder="Email"
              type="email"
            />
            <input
              className="form-control w-50"
              placeholder="Services Name"
              type="text"
            />
          </form>
          <ProcessPayment></ProcessPayment>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
