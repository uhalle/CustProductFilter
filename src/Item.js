import React, { Fragment } from 'react'

class Item extends React.Component{


    render(){
        return(
            <tr>
                <td>{this.props.item.category}</td>
                <td>{this.props.item.price}</td>
                <td>{this.props.item.stocked}</td>
                <td>{this.props.item.name}</td>
            </tr> 
        );
    }
}

export default Item;