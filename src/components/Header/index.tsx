import React from 'react';

import styles from './Header.module.scss';

function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>React-TypeScript Starter Kit</h1>
      <p className={styles.header__description}>
        Starter kit for React web applications
      </p>
    </div>
  );
}

export default Header;
