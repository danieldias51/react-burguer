import React from 'react';

import buergerLogo from '../../assets/burger-logo.png'
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={buergerLogo} alt="MyBuerger" />
    </div>
);

export default logo;