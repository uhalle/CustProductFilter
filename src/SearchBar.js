import React,{Component} from "react";

class SearchBar extends React.Component{
  
    constructor(props){
        super(props)
        this.handleTextChange = this.props.handleTextChange.bind(this)
        this.handleStockChecked = this.props.handleStockChecked.bind(this)
    }

    handleTextChange(e){
        this.props.handleTextChange(e.target.value)
    }

    handleStockChecked(e){
        this.props.handleStockChecked(e.target.value)
    }

    render(){
        return(
            <div>
                <section>
                <input type ='text'
                placeholder = 'search'
                value = {this.props.filterText}
                onChange = {this.handleTextChange} />
                </section>
                <section>
                <input type = 'checkbox'
                value = {this.props.stockOnly}
                onChange = { this.hadleStockChecked}/>
                </section>
            </div>

        );
    }
}

export default SearchBar;