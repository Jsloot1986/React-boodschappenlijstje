import React, { Component } from 'react'
import List from './List'

class ShoppingCart extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const shoppingListItems = this.props.shoppingListItems
        return ( 
            
                <List {...shoppingListItems}/>
        
         );
    }
}
 
export default ShoppingCart;
