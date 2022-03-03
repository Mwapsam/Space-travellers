import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import { fetchRockets } from '../redux/rockets/rockets';
import styles from './styles/Profiles.modules.css';

const Profile = () => {
  const profile = useSelector((state) => state.rockets.rockets);
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (profile.length === 0 && !missions) {
      dispatch(fetchRockets());
      dispatch(fetchMissions());
    }
  });

  const reserveData = profile.filter((data) => data.reserved === true && data);
  const missionReserve = missions.filter(
    (mission) => mission.isUserJoinedToMission === true && mission,
  );

  return (
    <>
      <section className={styles.profileSection}>
        {missionReserve.map((showMissions) => (
          <div className={styles.missionsCard} key={showMissions.id}>
            <h2 className={styles.missionsName}>My Missions</h2>
            <h3>{showMissions.missionName}</h3>
          </div>
        ))}

        {reserveData.map((flights) => (
          <div className={styles.rocketsCard} key={flights.id}>
            <h2 className={styles.rocketsName}>My Rockets</h2>
            <h3>{flights.names}</h3>
          </div>
        ))}
      </section>
    </>
  );
};

export default Profile;
