import React from 'react';
import Logo from '../../Logo/Logo';
import Navigationitems from '../NavigationItems/NavigationItems';
import classes from './sidedrawer.css'
import Backdrop from '../../UI/BackDrop/Backdrop';
import Auxi from '../../../hoc/Auxi';

const Sidedrawer = (props) => {

    let attachedClasses = [classes.sidedrawer, classes.close]
    if(props.open) {
        attachedClasses = [classes.sidedrawer, classes.open]
    }

    return (
        <Auxi>
            <Backdrop classDetails={classes.mobileonly} show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.logowrap}>
                    <Logo/>
                </div>
                <nav>
                    <Navigationitems/>
                </nav>
            </div>
        </Auxi>
    )
}

export default Sidedrawer
