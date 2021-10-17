import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText:'',
      inStockOnly: false
    }
  }

  handleFilterTextChange =(filterText) =>{
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange= (inStockOnly)=> {
    this.setState({
      inStockOnly: inStockOnly
    })
  }
  render() {
    const {filterText, inStockOnly} = this.state;
    const {products}=this.props;
    return (
      <div className="page">
        <SearchBar 
        filterText={filterText}
        inStockOnly={inStockOnly}
        onInStockChange={this.handleInStockChange}
        onFilterTextChange={this.handleFilterTextChange}/>
        <ProductTable 
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}/>
      </div>
    );
  }
}

export default FilterableProductTable