import React from 'react'
import CartElements from '../CartElements/CartElements'
import './ShoppingCart.css'




const ShoppingCart = () => {
    return (
        <div className="productsCartBox">
            <h2>Cesta (0) </h2>
            <div className="detailsBox">
                <div className="producTable">
                    <h3>Productos</h3>
                    <div>
                        <CartElements/>
                        
                    </div>
                </div>
                <div>
                    TOTAL
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart