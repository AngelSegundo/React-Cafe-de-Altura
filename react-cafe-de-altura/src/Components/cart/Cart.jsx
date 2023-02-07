import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import './Cart.css'
import { BoxIconElement } from 'boxicons'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { showCart, setShowCart, cartItems, setCartItems, total } = useContext(DataContext)

  const toogleShowCart = () => {
    setShowCart(!showCart)
  }

  const showShoppingCartBox = showCart ? "shoppingCartsShow" : "shoppingCarts"
  const showShoppingCart = showCart ? "shoppingCartShow" : "shoppingCart"


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
    <div className={showShoppingCartBox}>
      <div className={showShoppingCart}>
        <div className='shoppingCartClose' onClick={toogleShowCart}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>CESTA</h2>
        <div className='shoppingCartCenter'>
          {
            cartItems.length === 0 ? (<h2 style={{ textAlign: "center", fontSize: "3rem" }}>Cesta vacia</h2>) :

              cartItems.map(product => (
                <div className='shoppingCartItem' key={product._id}>
                  <img alt={product.brand} src={product.img_url} />
                  <div>
                    <h3>{product.brand}</h3>
                    <p className='price'>{product.price.toFixed(2)} €</p>
                    <h4>Subtotal: {(product.price.toFixed(2) * product.amount.toFixed(2)).toFixed(2)} €</h4>
                  </div>
                  <div>
                    <box-icon name="up-arrow" type="solid" onClick={() => plus(product._id)}></box-icon>
                    <p className='amount'>{product.amount}</p>
                    <box-icon name="down-arrow" type="solid" onClick={() => minus(product._id)}></box-icon>
                  </div>
                  <div className='remove__item' onClick={() => removeProduct(product._id)}>
                    <box-icon name="trash"></box-icon>
                  </div>
                </div>
              ))}
        </div>

        {
          cartItems.length !== 0 ?
            <div className='shoppingCartFooter'>

              <h3>Total: {total.toFixed(2)} €</h3>
              <h5>Incluye {(total.toFixed(2) * 0.21).toFixed(2)} € de IVA</h5>
              <Link to="/cesta" className='btn' onClick={toogleShowCart}>Tramitar pedido</Link>
            </div> : ''
        }

      </div>
    </div >

  )
}

export default Cart