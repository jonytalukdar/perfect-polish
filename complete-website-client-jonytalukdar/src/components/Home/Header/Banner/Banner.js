import React from 'react';
import banner from '../../../../images/banner.png';

const Banner = () => {
  return (
    <div className="row d-flex align-items-center py-4">
      <div className="col-md-6">
        <p className="lead">Welcome To Perfect Polish</p>
        <h1 className="display-4">
          The Best House <br />{' '}
          <span style={{ color: '#24bd7c' }}>Cleaning Services</span>{' '}
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          aspernatur reiciendis facilis perferendis iure deserunt!
        </p>
        <button className="btn">Read More</button>
      </div>
      <div className="col-md-6">
        <img className="rounded img-fluid" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
