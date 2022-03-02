import { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles/Mission.module.css';
import { fetchMissions } from '../redux/missions/missions';

const Mission = () => {
  const missions = useSelector((state) => state.missions.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) {
      dispatch(fetchMissions());
    }
  }, []);

  return (
    <section className={styles.missionSectionContainer}>
      <li className={styles.missionGridContainer} key="1">
        <div className={`${styles.headerText} ${styles.headerTextTopGridBlackBorder}`}>
          MISSIONS
        </div>
        <div className={`${styles.headerText} ${styles.headerTextTopGridBlackBorder}`}>
          DESCRIPTION
        </div>
        <div className={`${styles.headerText} ${styles.headerTextTopGridBlackBorder}`}>
          STATUS
        </div>
        <div className={`${styles.headerText} ${styles.headerTextTopGridBlackBorder}`} />
      </li>

      {missions.map((element, index) => (
        <Fragment key={element.id}>
          <li className={`${styles.missionGridContainer} ${index % 2 === 1 ? styles.missionGridGreyContainerColor : ''}`}>
            <div className={styles.headerText}>
              {element.missionName}
            </div>
            <div className={styles.headerText}>
              {element.description}
            </div>
            <div className={styles.headerText}>
              {element.isUserJoinedToMission
                ? <div className={styles.activeMemberButton}> ACTIVE MEMBER </div>
                : <div className={styles.notActiveMemberButton}> NOT A MEMBER</div>}
            </div>
            <div className={styles.headerText}>
              {element.isUserJoinedToMission
                ? <button type="button" className={styles.leaveMissionButton}> LEAVE MISSION </button>
                : <button type="button" className={styles.joinMissionButton}> JOIN MISSION </button> }
            </div>
          </li>
        </Fragment>
      ))}
    </section>
  );
};

export default Mission;
