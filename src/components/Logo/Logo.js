import React from 'react';

import buergerLogo from '../../assets/burger-logo.png'
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={buergerLogo} alt="MyBuerger" />
    </div>
);

export default logo;