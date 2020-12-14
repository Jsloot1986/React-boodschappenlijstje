import React, { Component } from 'react'
import List from './List'

class GroceryList extends Component {
        constructor(props) {
                super(props)
        }
       
        render() { 
                const groceryListItems = this.props.groceryListItems
                return (
                        <List {...groceryListItems}/>
                  );
        }
}
 
export default GroceryList;

