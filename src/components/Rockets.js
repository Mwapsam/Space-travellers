import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) {
      dispatch(fetchRockets());
    }
  }, []);
  return (
    <div>
      {rockets.map((rocket) => (
        <img src={rocket.images} key={rocket.id} alt={rocket.names} />
      ))}
    </div>
  );
};

export default Rockets;
