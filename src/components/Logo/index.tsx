import React, { FC } from 'react';

import logoSrc from '@assets/images/logo.svg';
import styles from './Logo.module.scss';

const Logo: FC = () => <img className={styles.logo} src={logoSrc} alt="Logo" />;

export default Logo;
