import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Meat', type: 'meat' },

]

const BuildControls = (props) => {
    return (
        <div className={classes.buildcontrols}>
            <p>Current Price : <strong>${props.price.toFixed(2)}</strong></p>

            {controls.map((control, i) => <BuildControl key={control.label + i + i} label={control.label} added={() => { props.ingredientsAdded(control.type) }}
                removed={() => { props.ingredientsRemoved(control.type) }} disabled={props.disabled[control.type]} />
            )}
                
            <button disabled={!props.purchasable} 
            className={classes.OrderButton}
            onClick={props.ordered}>Order Now!!</button>
        </div>
    )
}

export default BuildControls
