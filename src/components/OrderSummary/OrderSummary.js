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
            <h4>Your total price of burger is {props.price}</h4>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchasedContinue}>Continue</Button>
        </Auxi>
    )
}

export default OrderSummary
