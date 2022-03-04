import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import { fetchRockets } from '../redux/rockets/rockets';
import styles from './styles/Profile.module.css';

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
        <div className={styles.missionsCard}>
          <h2 className={styles.missionsName}>My Missions</h2>
          {missionReserve.map((showMissions) => (
            <div key={showMissions.id}>
              <h4 className={styles.name}>{showMissions.missionName}</h4>
            </div>
          ))}
        </div>
        <div className={styles.rocketsCard}>
          <h2 className={styles.rocketsName}>My Rockets</h2>
          {reserveData.map((flights) => (
            <div key={flights.id}>
              <h4 className={styles.name}>{flights.names}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Profile;
