import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import './CartElements.css'
import { BoxIconElement } from 'boxicons'
import { Link } from 'react-router-dom'
import decrease from '../../assets/img/Vector -.png'
import increase from '../../assets/img/Vector +.png'
import eliminate from '../../assets/img/delete-lcono.png'



const CartElements = () => {
    const { showCart, setShowCart, cartItems, setCartItems, total } = useContext(DataContext)

    const plus = (id) => {
        cartItems.forEach((product) => {
            if (product._id === id) {
                product.amount += 1
            }
            setCartItems([...cartItems])
        })

    }

    const minus = (id) => {
        cartItems.forEach((product) => {
            if (product._id === id) {
                product.amount === 1 ? removeProduct(product._id) : product.amount -= 1
            }
            setCartItems([...cartItems])
        })
    }

    const removeProduct = (id) => {
        if (window.confirm("¿Quieres eliminar el producto?")) {
            cartItems.forEach((product, index) => {
                if (product._id === id) {
                    product.amount = 1
                    cartItems.splice(index, 1)
                }
            })
            setCartItems([...cartItems])
        }
    }

    return (
        <div className=''>
            <div className=''>
                {
                    cartItems.length === 0 ? (<h2 style={{ textAlign: "center", fontSize: "3rem" }}>Cesta vacia</h2>) :

                        cartItems.map(product => (
                            <div className='rowItem' key={product._id}>
                                <div className='cant counter'>
                                    <div className="minus-input">
                                        <img onClick={() => minus(product._id)} className="minus" name="${product.id}" src={decrease} alt=""/>
                                    </div>
                                    <div className="number-input">
                                        <p className="addQuantity">{product.amount}</p>
                                    </div>
                                    <div className="plus-input">
                                        <img onClick={() => plus(product._id)} className="plus" name="${product.id}" src={increase} alt=""/>
                                    </div>
                                </div>
                                <div className="coffeBag">
                                    <img className="itemImg" src={product.img_url} width="100"/>
                                </div>
                                <div className="item-content">
                                    <div>
                                        <p className="item-title">{product.brand}</p>
                                        <p className="cart-price">Precio: {product.price.toFixed(2)} €</p>
                                    </div>
                                </div>
                                <div className="item-title-details">
                                    <h3>{(product.price * product.amount).toFixed(2)} €</h3>
                                </div>
                                <input type="image" className="delete-product" onClick={() => removeProduct(product._id)} id={product._id} src={eliminate} height="30" width="30" />
                            </div>
                        ))}
            </div>

            {
                cartItems.length !== 0 ?
                    <div className='shoppingCartFooter'>
                        <h3>Total: {total.toFixed(2)} €</h3>
                        <h5>Incluye {(total.toFixed(2) * 0.21).toFixed(2)} € de IVA</h5>
                    </div> : ''
            }

        </div>


    )
}

export default CartElements