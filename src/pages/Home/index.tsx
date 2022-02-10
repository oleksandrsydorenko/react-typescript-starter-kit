import React from 'react';

import { Header, Logo } from '@components';
import styles from './Home.module.scss';

function Home(): JSX.Element {
  return (
    <div className={styles.home}>
      <Logo />
      <Header />
    </div>
  );
}

export default Home;
