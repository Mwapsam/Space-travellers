import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './styles/Navbar.module.css';
import logo from '../images/planet.png';

const Navbar = () => (
  <>
    <nav className={styles.navbar}>
      <div className={styles.nav}>
        <img src={logo} className={styles.logo} alt="" />
        <div className={styles.navItems}>
          <Link className={styles.linkItem} to="/">
            Rockets
          </Link>
          <Link className={styles.linkItem} to="/missions">
            Missions
          </Link>
          <Link className={styles.linkItem} to="/profile">
            My Profile
          </Link>
        </div>
      </div>
      <Outlet />
    </nav>
  </>
);

export default Navbar;
