import React from 'react';
import Link from 'next/link';

import styling from './Logo.module.scss';

/**
 * This component should render your logo.
 * Feel free to change it to your needs.
 * @returns {*}
 * @constructor
 */
const Logo = () => (
    <Link href='/'>
        <div className={styling.logo}><b> Edufa</b></div>
    </Link>
);

export default Logo;