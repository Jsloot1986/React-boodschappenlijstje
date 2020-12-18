import React, { Component } from 'react'

class InputField extends Component {
    
    render() { 
        return ( 
            <div>
                    <input
                            type="text"
                            placeholder="Brood"
                            name="newItem"
                            id="newItem"
                        />
                    <button type="submit" className="btn" onClick={this.props.addItem}>Add</button>
               
            </div>
         );
    }
}
 
export default InputField;