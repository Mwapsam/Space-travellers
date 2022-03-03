import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './styles/Navbar.module.css';
import logo from '../images/planet.png';

const Navbar = () => (
  <>
    <nav className={styles.navbar}>
      <div className={styles.nav}>
        <div className={styles.logoItems}>
          <img src={logo} className={styles.logo} alt="" />
          <Link className={styles.logoTheme} to="/">
            Space Travellers` Hub
          </Link>
        </div>

        <div className={styles.navItems}>
          <Link className={styles.linkItem} to="/">
            Rockets
          </Link>
          <Link className={styles.linkItem} to="/missions">
            Missions
          </Link>
          <div className={styles.profiles}>
            <span className={styles.line} />
            <Link className={styles.linkItem} to="/profile">
              My Profile
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </nav>
  </>
);

export default Navbar;
