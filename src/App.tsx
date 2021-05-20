import React, { FC } from 'react';

import Header from 'components/Header';
import styles from './App.module.scss';

const App: FC = () => (
  <div className={styles.app}>
    <Header />
  </div>
);

export default App;
