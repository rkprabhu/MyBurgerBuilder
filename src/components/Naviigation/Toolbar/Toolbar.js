import React from 'react';
import classes from './toolbar.css'
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';
import Menuicon from '../Menuicon/Menuicon';

const Toolbar = (props) => {
    return (
        <header className={classes.toolbar}>
            <div className={[classes.menuI, classes.mobileonly].join(' ') } onClick={props.clicked}><Menuicon/></div>
            <div className={classes.logowrap}>
                <Logo/>
            </div>
            <nav className={classes.desktoponly}>
                <Navigationitems/>
            </nav>
        </header>
    )
}

export default Toolbar
