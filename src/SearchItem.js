import React from 'react'
import Cart from './Cart';
import SearchBar from './SearchBar';

class SearchItem extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            searchText : '',
            stockOnly : false
        }

        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleStockChecked = this.handleStockChecked.bind(this)
    }

    handleTextChange(searchText){
        this.setState({
            searchText : searchText
        });
    }

    handleStockChecked(stockOnly){
        this.setState({
            stockOnly : stockOnly
        })
    }

    render(){
        return(
            <div>
             <SearchBar
             searchText = {this.state.searchText}
             stockOnly = {this.state.stockOnly}
             handleTextChange = {this.handleTextChange}
             handleStockChecked= {this.handleStockChecked}
            />
            <Cart
             filterText = {this.state.filterText}
             stockOnly = {this.state.stockOnly}
             items = {items}
            />
            </div>

        );
    }
}

const items =
[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

export default SearchItem;