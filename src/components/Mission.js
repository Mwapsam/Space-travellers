import React from 'react';
import styles from './styles/Mission.module.css';

const missions = [{
  mission: 'MISSION 1',
  description: `Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem 
 Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
 Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum`,
  isUserJoinedToMission: false,
}, {
  mission: 'MISSION 2',
  description: `Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem 
  Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
  Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum`,
  isUserJoinedToMission: false,
}, {
  mission: 'MISSION 3',
  description: `Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem 
  Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
  Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum`,
  isUserJoinedToMission: true,
}, {
  mission: 'MISSION 4',
  description: `Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem 
  Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
  Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum`,
  isUserJoinedToMission: false,
}];

const Mission = () => (
  <section className={styles.missionSectionContainer}>
    <div className={styles.missionGridContainer}>
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
    </div>

    {missions.map((element, index) => (
      <div className={`${styles.missionGridContainer} ${index % 2 === 1 ? styles.missionGridGreyContainerColor : ''}`}>
        <div className={styles.headerText}>
          {element.mission}
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
            ? <button type="button" className={styles.joinMissionButton}> JOIN MISSION </button>
            : <button type="button" className={styles.leaveMissionButton}> LEAVE MISSION </button>}
        </div>
      </div>
    ))}
  </section>
);

export default Mission;
