import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import { BoxIconElement } from 'boxicons'
import './TotalCart.css'
import { Link } from 'react-router-dom'

const TotalCart = ({ shipment }) => {

    const {  total } = useContext(DataContext)


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
                    <p className="subtotalAmount shippingAmount"><span>{shipment===0 ? "GRATIS" : shipment.toFixed(2)}</span></p>
                </div>
                <hr />
                <div className="detailOfTotal">
                    <p className="totalTitle">TOTAL</p>
                    <div className="totalAmount">
                        <p className="subtotalAmount total">{(total + shipment).toFixed(2)} €</p>
                        <p className="subtotalIVA iva">Incluye {(total *0.21).toFixed(2)} € de IVA</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="buttonsWrapper">
                <button className="checkout">Ir a checkout</button>
                <Link to="/Store"><button className="keepBuying" >Seguir comprando</button></Link>
            </div>
        </div>


    )
}

export default TotalCart