import React, { useContext } from 'react'
import CartElements from '../CartElements/CartElements'
import './ShoppingCart.css'
import { DataContext } from '../../context/DataContext'
import TotalCart from '../TotalCart/TotalCart'


const ShoppingCart = () => {
    const { showCart, setShowCart, cartItems, setCartItems, total, productsLength } = useContext(DataContext)



    return (
        <div className="productsCartBox">
            <h2>Cesta ({productsLength}) </h2>
            <div className="detailsBox">
                <div className="producTable">
                    <h3>Productos</h3>
                    <div>
                        <CartElements />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="shippingMode">
                            <h3>Seleccionar envío</h3>
                            <div className="shipping">
                                <div>
                                    <input type="radio" id="choice1" name='shippingMethod' value="0" />
                                </div>

                                <div className="details">
                                    <p className="standar">Envío 5-7 días</p>
                                    <p className="conditionsTimes">Opción estándar sin seguimiento</p>
                                </div>
                                <div className="price">
                                    <p><span>GRATIS</span></p>
                                </div>
                            </div>

                            <hr />

                            <div className="shipping">
                                <div>
                                    <input type="radio" id="choice2" name="shippingMethod" value="15" />
                                </div>

                                <div className="details">
                                    <p className="standar">Envío urgente 24h</p>
                                    <p className="conditionsTimes">Recibe tu pedido en las siguientes 24h (Para pedidos realizados
                                        antes de las 13:00).
                                    </p>
                                </div>
                                <div className="price">
                                    <p><span>9.00 €</span></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <TotalCart/>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart