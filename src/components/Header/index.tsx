import React, { FC } from 'react';
import { ReactComponent as LogoIcon } from 'assets/logo.svg';
import styles from './Header.module.scss';

const Header: FC = () => (
  <header className={styles.header}>
    <LogoIcon className={styles.header__logo} />
    <div className={styles.header__info}>
      <h1 className={styles.header__title}>React-TypeScript Starter Kit</h1>
      <p className={styles.header__description}>Starter kit for React web applications</p>
    </div>
  </header>
);

export default Header;
