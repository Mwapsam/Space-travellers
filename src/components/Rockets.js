import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import styles from './styles/Rockets.module.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRockets());
    }
  }, []);
  return (
    <section>
      {rockets.map((rocket) => (
        <div className={styles.rocketSection} key={rocket.id}>
          <div className={styles.card} key={rocket}>
            <img src={rocket.images} alt={rocket.names} />
          </div>
          <div className={styles.cardItems}>
            <h3>{rocket.names}</h3>
            <p>{rocket.description}</p>
            <button className={styles.button} type="button">
              Reserve Rocket
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Rockets;
