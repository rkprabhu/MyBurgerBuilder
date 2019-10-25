import React from 'react'
import classes from './Navigationitems.css'
import Navigationitem from './NavigationItem/Navigationitem'

const Navigationitems = (props) => {
    return (
       <ul className={classes.navigationitems}>
           <Navigationitem link="/" active>Burger Builder</Navigationitem>
           <Navigationitem link="/">Checkout</Navigationitem>
       </ul>
    )
}

export default Navigationitems
