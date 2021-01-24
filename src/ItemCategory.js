import React from 'react'

class ItemCategory extends React.Component{

    render(){
        return(
            <td>
            {this.props.category}
            </td>
        )
    }
}

export default ItemCategory