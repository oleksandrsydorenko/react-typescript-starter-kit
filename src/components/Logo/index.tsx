import React from 'react';

import logoSrc from '@assets/images/logo.svg';
import styles from './Logo.module.scss';

function Logo(): JSX.Element {
  return <img className={styles.logo} src={logoSrc} alt="Logo" />;
}

export default Logo;
