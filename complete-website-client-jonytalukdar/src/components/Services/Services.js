import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import { Spinner } from 'react-bootstrap';
import styles from './services.module.css';

const Services = () => {
  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://shrouded-oasis-19794.herokuapp.com/services')
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className={styles.services}>
      <h2 className="text-center">
        Professional Care & <span style={{ color: '#24bd7c' }}>Services</span>
      </h2>
      <div className="row m-4">
        {services.length === 0 && (
          <div style={style}>
            <Spinner variant="primary" animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        )}
        {services.map((service) => (
          <ServiceCard key={service.title} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
