import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import { BoxIconElement } from 'boxicons'
import './TotalCart.css'

const TotalCart = () => {

    const { showCart, setShowCart, cartItems, setCartItems, total } = useContext(DataContext)


    return (
        <div className="totalCart">
            <div className="totalDetails">
                <h3>Total del carrito</h3>
                <hr />
                <div className="subTotalDetails">
                    <p className="subtotalTitle">SUBTOTAL</p>
                    <p className="subtotalAmount subtotal">{total.toFixed(2)} €</p>
                </div>
                <div className="subTotalDetails">
                    <p className="subtotalTitle">ENVÍO</p>
                    <p className="subtotalAmount shippingAmount"><span>GRATIS</span></p>
                </div>
                <hr />
                <div className="detailOfTotal">
                    <p className="totalTitle">TOTAL</p>
                    <div className="totalAmount">
                        <p className="subtotalAmount total">{total.toFixed(2)} €</p>
                        <p className="subtotalIVA iva">Incluye {(total *0.21).toFixed(2)} € de IVA</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="buttonsWrapper">
                <button className="checkout">Ir a checkout</button>
                <button className="keepBuying">Seguir comprando</button>
            </div>
        </div>


    )
}

export default TotalCart