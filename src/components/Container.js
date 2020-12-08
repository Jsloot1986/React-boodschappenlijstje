import React, {Component} from 'react'
import ShoppingCart from './ShoppingCart'
import GroceryList from './GroceryList'

class Container extends Component{
    constructor(){
        super()
    this.state={
            groceryItems:[
                {id: 1, title: "Appels"},
                {id: 2, title: "Aardbeien"},
                {id: 3, title: "Soya Yoghurt"},
                {id: 4, title: "Thee"},
            ],
            shoppingListItems:[ ]
            } 
               
        }
    render(){
        const Items =this.state.groceryItems.map(item=>
            <ListItems key={item.id} value={item.title}/>)
        return(
            <div className="container">
                <GroceryList />
            </div>
        )
       }
    } 


export default Container