import React, { Component } from 'react'
import Auxi from '../../hoc/Auxi'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'

const INGREDINT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    bacon: 0.6,
    meat: 1
}

class Burgerbuilder extends Component {
    state={
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    

    addIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDINT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newprice = oldPrice + priceAddition;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newprice
        })
        this.updatePurchaseState(updatedIngredients)
        
    }
    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return ;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDINT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newprice = oldPrice - priceAddition;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newprice
        })
        this.updatePurchaseState(updatedIngredients)
        
    }

    updatePurchaseState (ingredients) {

        const sum = Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey];
            }).reduce((sum, el)=> {
                return sum+ el
            },0)

        this.setState({
            purchasable: sum > 0
        })

    }

    purchaseHandler = () => {
        this.setState({
            purchasing : true
        })
    }

    hideModalHandler = () => {
        this.setState({
            purchasing : false
        })
    }

    purchaseContinueHandler = () => {
        alert("you Continue!!!")
    }
    
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
    
        for (let key in disabledInfo) {
            console.log(key);
            console.log(disabledInfo[key]);
            disabledInfo[key] = disabledInfo[key] <=0
            console.log(disabledInfo[key]);
        }
        
        return (
            <Auxi>
                
                <Modal show={this.state.purchasing} hideHandler={this.hideModalHandler} >
                    <OrderSummary price={this.state.totalPrice} purchaseCancelled={this.hideModalHandler}  purchasedContinue={this.purchaseContinueHandler} ingredients={this.state.ingredients}/>
                </Modal>
                <Burger  ingredients={this.state.ingredients}/>
                <BuildControls ordered={this.purchaseHandler} purchasable={this.state.purchasable} disabled={disabledInfo} ingredientsAdded={this.addIngredientHandler} ingredientsRemoved={this.removeIngredientHandler} price={this.state.totalPrice}/>
            </Auxi>
        )
    }
}

export default Burgerbuilder
