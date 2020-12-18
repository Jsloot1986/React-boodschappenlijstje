import React, { Component } from 'react'
import ListItems from './ListItems'
import InputField from './InputField'
import ShoppingCart from './ShoppingCart'

let groceryListItems = []; 
let refid = 0;
let valueItem = '';


class List extends Component {
    constructor() {
        super()
this.state = {
            groceryListItems: [],
            shoppingListItems: [],
            newItem: "",
               }
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
        this.handleEmptyShoppingCart = this.handleEmptyShoppingCart.bind(this);
        this.handleAddNewItem = this.handleAddNewItem.bind(this);
    }

    handleEmptyShoppingCart = () => {
        this.setState({shoppingListItems: []})
    }

    handleAddNewItem = () => {
        let newItem = document.getElementById("newItem");
        valueItem = newItem.value;
        if (valueItem) {
            let checkArray = this.state.groceryListItems;
            refid = 0;
            checkArray.map((item) => {
                if (item.title.toUpperCase() === valueItem.toUpperCase()) {
                    item.amount += 1;
                    refid = item.id;
                }
                return item;
            });
            if (refid === 0) {
                let newId = this.state.groceryListItems.length + 1;
                let newList = this.state.groceryListItems;
                newList[newId - 1] = { id: newId, title: valueItem, amount: 1 };
                this.setState({ groceryListItems: newList });
            } else {
                this.setState({ groceryListItems: checkArray})
            }
            newItem.value = "";
        } else alert("vul iets in a.u.b.")
        
    }

    handleClickGroceryItem = (id) => {
        let shoppingListArray = this.state.shoppingListItems;
        let add = true;
        refid = 0;
        groceryListItems = this.state.groceryListItems;
        if (shoppingListArray.length !== 0) {
            shoppingListArray.forEach((item) => {
                if (item.id === id)
                    if (groceryListItems[id - 1].amount === item.amount) {
                        add = false;
                        alert("dit item is al in je mandje, voer het nogmaals in bij input veld en het aantal word verhoogd")
                    } else {
                        add = "changeAmount";
                    }
            });
        }
        if (add === true) {
            const groceryItem = this.state.groceryListItems[id - 1];
            let changedShoppingList = this.state.shoppingListItems;
            changedShoppingList.push(groceryItem);
            this.setState({shoppingListItems: shoppingListArray})
        }
    }
    
    componentDidMount() {
        groceryListItems.push({ id: 1, title: "Appels", amount: 1 });
        groceryListItems.push({ id: 2, title: "Soya-Yoghurt", amount: 1 });
        groceryListItems.push({ id: 3, title: "Walnoten", amount: 1 });
        groceryListItems.push({ id: 4, title: "Aardbeien", amount: 1 });

        this.setState({groceryListItems: groceryListItems})
    }
        
    
    render() {
        const {groceryListItems, shoppingListItems} = this.state
        const groceryListItems2 = groceryListItems.map((item) => (
            <ListItems
                key={item.id}
                item={item}
                onClick={this.handleClickGroceryItem}
                className="list-item"
            />
        ));
        const shoppingListItems2 = shoppingListItems.map((item) => (
            <ShoppingCart
                key={item.id}
                item={item}
                className="shopping-list-item"
            />
        ));
        return ( 
            <div className="container">
                <h1 className="mainTitle">BoodschappenLijstje App</h1>
                <div className="lists">
                    <div className="grocery-list">
                        <h1>BoodschappenLijstje</h1>
                        <InputField addItem={this.handleAddNewItem} />
                        <ul>{groceryListItems2}</ul>
                    </div>
                    <br />
                    <div className="shopping-list">
                        <h1>WinkelMandje</h1>
                        <button id="deleteBtn" onClick={this.handleEmptyShoppingCart}>Empty Cart</button>
                        <ul>{shoppingListItems2}</ul>
                    </div>
                </div> 
            </div>    
         );
    }
}
 
export default List;
