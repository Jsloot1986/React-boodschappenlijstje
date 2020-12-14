import React, { Component } from 'react'

class InputField extends Component {
    constructor() {
        super()
    }
    
    render() { 
        return ( 
            <div>
                <input
                    id="newItem"
                    type="text"
                    name="newItem"
                    placeholder="Voeg item toe hier"
                />
                <button id="addButton" onClick={this.props.handleAddNewItem}>Add item</button>
            </div>
         );
    }
}
 
export default InputField;