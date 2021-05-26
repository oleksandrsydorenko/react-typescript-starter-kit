import React from 'react';

import logoSrc from '@assets/images/logo.svg';
import styles from './Logo.module.scss';

const Logo = (): JSX.Element => (
  <img className={styles.logo} src={logoSrc} alt="Logo" />
);

export default Logo;
