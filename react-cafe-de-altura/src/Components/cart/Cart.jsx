import React, { useContext } from 'react'
import { DataContext } from '../../context/DataContext'
import './Cart.css'
import { BoxIconElement } from 'boxicons'

const Cart = () => {
  const { showCart, setShowCart, cartItems, setCartItems, total } = useContext(DataContext)

  const toogleShowCart = () => {
    setShowCart(!showCart)
  }

  const show1 = showCart ? "shoppingCarts show" : "shoppingCarts"
  const show2 = showCart ? "shoppingCart show" : "shoppingCart"


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
        product.amount === 1 ? product.amount = 1 : product.amount -= 1
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
    <div className={show1}>
      <div className={show2}>
        <div className='shoppingCartClose' onClick={toogleShowCart}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>Su Carrito</h2>
        <div className='shoppingCartCenter'>
          {
            cartItems.length === 0 ? (<h2 style={{ textAlign: "center", fontSize: "3rem" }}>Cesta vacia</h2>) :

              cartItems.map(product => (
                <div div className='shoppingCartItem' key={product._id}>
                  <img alt={product.brand} src={product.img_url} />
                  <div>
                    <h3>{product.brand}</h3>
                    <p className='price'><span>{product.price.toFixed(2)}</span> €</p>
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
              <h3>Total: <span>{total.toFixed(2)}</span> €</h3>
              <button className='btn'>Tramitar pedido</button>
            </div> : ''
        }

      </div>
    </div >

  )
}

export default Cart