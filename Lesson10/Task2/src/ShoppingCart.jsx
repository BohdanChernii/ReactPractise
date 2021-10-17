import React from 'react';
import ProductsList from './ProductsList.jsx';
import CartTitle from './CartTitle.jsx';

class ShoppingCart extends React.Component { 
    state = {
        cartItems: [
          { id: '1', name: 'Iphone13', price: 1500 },
          { id: '2', name: 'Iphone10', price: 1000 },
          { id: '3', name: 'Xiaomi Mi 10pro', price: 500 },
        ],
      };

    render() {
        const count = this.state.cartItems.length
    return (
      <div className="column">
        <CartTitle userName={this.props.userName} count ={count} />
        <ProductsList cartItems={this.state.cartItems}/>
      </div>
    );
    }
}

export default ShoppingCart;
