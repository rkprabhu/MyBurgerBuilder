import React from 'react';
import classes from './Modal.css'
import Auxi from '../../../hoc/Auxi';
import Backdrop from '../BackDrop/Backdrop';

const Modal = (props) => {    

    return (
        <Auxi>
        <Backdrop show={props.show} clicked={props.hideHandler}/>
        <div 
            style={{display: props.show ? 'block' : 'none'}} 
            className={classes.Modal}>
            {props.children}
        </div>
        </Auxi>
    )
}

export default Modal
