import React from 'react';
import about from '../../images/about.jpg';
import clean from '../../images/household.png';
import Experience from '../../images/experience.png';
import styles from './About.module.css';

const About = () => {
  return (
    <section className="row d-flex  align-items-center py-4">
      <div className="col-md-6">
        <img className="img-fluid" src={about} alt="" />
      </div>
      <div className="col-md-6">
        <div className="row">
          <div className="col-md-3">
            <img className="img-fluid" src={clean} alt="" />
          </div>
          <div className="col-md-9">
            <h1>
              We Are Best Cleaning <br />{' '}
              <span style={{ color: '#24bd7c' }}>Company Since 2012</span>
            </h1>
          </div>
        </div>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          consequuntur quia cum velit, aliquam ipsa nobis at saepe voluptate
          cumque!
        </p>
        <div className="row">
          <div className="col-md-5 text-center">
            <div className={styles.experience}>
              <div className="d-block">
                <img
                  className="img-fluid w-50 text-center"
                  src={Experience}
                  alt=""
                />
              </div>
              <h2>
                10 Years <br /> Experience{' '}
              </h2>
            </div>
          </div>
          <div className="col-md-7">
            <ul className="text-secondary">
              <li>
                <h6>We Are Very Fast To Clean</h6>
              </li>
              <li>
                <h6>Lorem ipsum dolor sit amet.</h6>
              </li>
              <li>
                <h6>Lorem ipsum dolor sit.</h6>
              </li>
              <li>
                <h6>Lorem ipsum dolor sit amet consectetur.</h6>
              </li>
              <li>
                <h6>We Are Very Fast To Clean</h6>
              </li>
            </ul>
          </div>
          <p className="text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis hic dicta earum? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Ab, expedita.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
