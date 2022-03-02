import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchRockets,
  reserve,
  cancelReservation,
} from '../redux/rockets/rockets';
import styles from './styles/Rockets.module.css';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  const handleReserve = (id) => {
    dispatch(reserve(id));
  };

  const cancelReserve = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <section>
      {rockets.map((rocket) => (
        <div className={styles.rocketSection} key={rocket.id}>
          <div className={styles.card} key={rocket}>
            <img src={rocket.images} alt={rocket.names} />
          </div>
          <div className={styles.cardItems}>
            <h3>{rocket.names}</h3>
            <p>
              <span className={rocket.reserve ? styles.badge : styles.noBadge}>
                Reserved
              </span>
              {rocket.description}
            </p>
            {rocket.reserved ? (
              <button
                id={rocket.id}
                className={styles.cancelRocket}
                type="button"
                onClick={cancelReserve}
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                id={rocket.id}
                className={styles.button}
                type="button"
                onClick={(e) => {
                  handleReserve(e.target.id);
                }}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Rockets;
