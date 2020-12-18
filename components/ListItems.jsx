import React, {Component} from 'react'

class ListItems extends Component {

    
    render() { 
        return ( 
            <li
                key={this.props.item.id}
                className={this.props.className}
                value={this.props.item.title} 
                onClick={(e) => this.props.onClick(this.props.item.id)}
            >
                {this.props.item.title}
            
                {this.props.item.amount}
            </li>
         );
    }
}
 
export default ListItems;