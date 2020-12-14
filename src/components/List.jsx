import React, { Component } from 'react'
import ListItems from './ListItems'

class List extends Component {
    constructor(props) {
        super(props)
        
    }
    render() {
        
        const groceryListItems = this.props.groceryListItems.map((item) => (
            <ListItems
                key={item.id}
                item={item}
                clickItem={this.handleClickGroceryItem}
                className="list-item"
            />
        ));
        const shoppingListItems = this.props.shoppingListItems.map((item) => (
            <ListItems
                key={item.id}
                item={item}
                className="shopping-list-item"
            />
        ));
        return ( 
            <div>
                <ul>
                    {groceryListItems}
                </ul>
                <ul>
                    {shoppingListItems}
                </ul>
            </div>    
         );
    }
}
 
export default List;
