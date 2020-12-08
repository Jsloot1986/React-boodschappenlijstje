import { render } from '@testing-library/react'
import React from 'react'

function ListItems(props){
    

    return(
        
            <li 
            key={props.item.id}
            className="list-item"
            value={props.item.title}>{props.item.title}
            </li>          
        
    )
}
export default ListItems