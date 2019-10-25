import React from 'react';
import classes from './navigationitem.css'

const Navigationitem = (props) => {
    return (
        <li className={classes.navigationitem}>
            <a href={props.link} className={props.active ? classes.active : null}>{props.children}</a>
            </li>          
    )
}

export default Navigationitem
