import React, { Component } from 'react'
import Auxi from '../../hoc/Auxi'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

class Burgerbuilder extends Component {
    state={
        ingredients: {
            salad: 0,
            bacon: 0,
            chees: 0,
            meat: 0
        }
    }
    
    render() {
        return (
            <Auxi>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </Auxi>
        )
    }
}

export default Burgerbuilder
