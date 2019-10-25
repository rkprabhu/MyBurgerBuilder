import React from 'react';
import classes from './Backdrop.css'

const Backdrop = (props) => {
    return (
        <div style={{display: props.show ? 'block' : 'none'}} className={[classes.backdrop, props.classDetails].join(' ')}  onClick={()=> {props.clicked()}} >
            
        </div>
    )
}

export default Backdrop
