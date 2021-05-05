import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import styles from './Service.module.css';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ServiceCard = ({ service }) => {
  const history = useHistory();
  const handleService = (_id) => {
    history.push(`/book/${_id}`);
  };

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 200, friction: 50 },
  }));

  return (
    <div className="col-md-4 ">
      <animated.div
        style={props}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.interpolate(trans),
        }}
        className={styles.service}
      >
        <img className={styles.img} src={service.imageURL} alt="" />
        <Card.Body>
          <Card.Title>{service.title}</Card.Title>
          <p className="text-secondary"> {service.description}</p>
          <div className="d-flex justify-content-between">
            <h3> $ {service.price}</h3>
            <button className="btn" onClick={() => handleService(service._id)}>
              Book Now
            </button>
          </div>
        </Card.Body>
      </animated.div>
    </div>
  );
};

export default ServiceCard;
