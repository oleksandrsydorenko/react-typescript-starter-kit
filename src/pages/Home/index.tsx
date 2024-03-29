import React from 'react';

import { Header, Logo } from '@components';
import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.home}>
    <Logo />
    <Header />
  </div>
);

export default Home;
