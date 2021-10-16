import React  from 'react';

function CartTitle ({ userName, count}) {
        return (
            <div className="cart-title">
             <h1 className="title">{`${userName}, you added ${count} products`}</h1>
            </div>
        )
}
export default CartTitle;