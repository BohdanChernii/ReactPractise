import React from 'react';
 
class  SearchBar extends React.Component {
 handleStockChange = e =>{
     this.props.onInStockChange(e.target.checked)
 }
 handleFilterTextChange = e =>{
    this.props.onFilterTextChange(e.target.value)
 }
    render() {
    return(
        <form action="">
            <input type="text" placeholder="Search..."value={this.props.filterText} onChange={this.handleFilterTextChange}/>
            <p>
            <input type="checkbox" checked={this.props.inStockOnly}
            onChange={this.handleStockChange}/>
            {' '}
            Only show products in stock 
            </p> 
        </form>
    )
}
}
export default SearchBar;