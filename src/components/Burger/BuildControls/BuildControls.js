import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
]

const BuildControls = (props) => {
    return (
        <div className={classes.buildcontrols}>
            {controls.map((control,i) => <BuildControl key={control.label+i} label={control.label}/> )}
        </div>
    )
}

export default BuildControls
