import React from 'react';
import './Footer.css';
import FooterCol from './Footer.col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGooglePlusG,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const noNamed = [
    { name: 'Emergency Cleaning Care', link: '/emergency' },
    { name: 'Check Up', link: '/checkup' },
    { name: 'Fast of Professional Cleaning', link: '/persona' },
    { name: 'Cleaning Extraction', link: '/tooth-extract' },
    { name: 'Check Up', link: '/checkup' },
  ];
  const ourAddress = [
    { name: 'New York - 101010 Hudson', link: '//google.com/map' },
    { name: 'Yards', link: '//google.com/map' },
  ];
  const oralClean = [
    { name: 'Emergency Cleaning Care', link: '/emergency' },
    { name: 'Check Up', link: '/checkup' },
    { name: 'Cleaing of Professional ', link: '/personal-treatment' },
    { name: 'Cleaning Extraction', link: '/tooth-extract' },
  ];
  const services = [
    { name: 'Emergency Cleaning Care', link: '/emergency' },
    { name: 'Check Up', link: '/checkup' },
    { name: ' Cleaning of Personal Room', link: '/personal-treatment' },
    { name: 'Cleanign Extraction', link: '/tooth-extract' },
  ];
  return (
    <footer className="footer-area clear-both">
      <div className="container pt-3">
        <div className="row py-3">
          <FooterCol key={1} menuTitle={'.'} menuItems={noNamed} />
          <FooterCol key={2} menuTitle="Services" menuItems={services} />
          <FooterCol key={3} menuTitle="Oral Clean" menuItems={oralClean} />
          <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
            </ul>
            <div className="mt-3">
              <div className="d-flex align-items-center">
                <input
                  placeholder="Email"
                  className="form-control"
                  type="text"
                />
                <button
                  style={{
                    marginLeft: '-50px',
                    borderRadius: '0px 0px 0px 0px !important',
                  }}
                  className="btn"
                >
                  Subcribe
                </button>
              </div>
              {/* <h6>Call now</h6>
              <button className="btn">+2025550295</button> */}
            </div>
          </FooterCol>
        </div>
        <div className="copyRight text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
