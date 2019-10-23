import React from 'react';
import Auxi from '../../hoc/Auxi';
import Button from '../UI/Button/Button';


const OrderSummary = (props) => {
    const ingredientsDetails = Object.keys(props.ingredients).map((igKey,i) => {
        return (
            <li key={igKey + i}><span>{igKey}</span>: {props.ingredients[igKey]}</li>
        )
    })
    return (
        <Auxi>
            <h3>Your Order</h3>
            <p>Below are the list items aaded to your burger!!</p>
            <ul>
                {ingredientsDetails}
            </ul>
            <Button>Cancel</Button>
            <Button>Continue</Button>
        </Auxi>
    )
}

export default OrderSummary
