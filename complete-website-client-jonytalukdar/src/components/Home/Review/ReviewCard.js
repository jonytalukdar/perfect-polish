import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import styles from './Review.module.css';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ReviewCard = ({ review }) => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 200, friction: 50 },
  }));

  return (
    <div className="col-md-4">
      <animated.div
        style={props}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.interpolate(trans),
        }}
        className={styles.card}
      >
        <div>
          <img className="img" src={review.imageURL} alt="" />
          <Card.Body>
            <Card.Title>{review.title}</Card.Title>
            <h5>{review.profession}</h5>
            <p className="text-secondary"> {review.description}</p>
            <div className="text-warning">
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faStarHalf}></FontAwesomeIcon>
            </div>
          </Card.Body>
        </div>
      </animated.div>
    </div>
  );
};

export default ReviewCard;
