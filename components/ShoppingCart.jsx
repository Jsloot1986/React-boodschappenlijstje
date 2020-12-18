import React, { Component } from 'react'

class ShoppingCart extends Component {
  
    render() { 
        return ( 
            <li className={this.props.className}
            >
                {this.props.item.title}

                {this.props.item.amount} 
            </li>
         );
    }
}
 
export default ShoppingCart;
