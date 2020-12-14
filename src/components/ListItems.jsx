import React, {Component} from 'react'

class ListItems extends Component {
    constructor(props) {
        super(props)
    }
    
    render() { 
        return ( 
            <li
                key={this.props.item.id}
                className={this.props.className}
                value={this.props.item.title}
                onClick={(e) => this.props.ClickItem(this.props.item.id)}
            >
                {this.props.item.title}
                {this.props.item.amount !== 1 ?(
                    <span>Totaal: {this.props.item.amount}</span>) :
                    (<span></span>)}
            </li>
         );
    }
}
 
export default ListItems;