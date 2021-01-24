import React, { Fragment } from 'react'
import Item from "./Item";
import ItemCategory from "./ItemCategory"

class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            items : []
        }
    }

    componentDidMount(){
        this.setState({
            items : this.props.items
        })
    }

    render(){
        console.log(this.state.items)
        let lastCategory = null;
        const rows = []
        const listItems = this.state.items.map((item) =>{
        if (item.category !== lastCategory) { 
            rows.push(<ItemCategory category = {item.category}/>
            )    
        }
        rows.push(<Item item = {item}/>)
        lastCategory = item.category
        } 
        );

        return(
        <thead>
            <tbody>
            {rows}
            </tbody>
        </thead>
            
        );
    }

}

export default Cart;