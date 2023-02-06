import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import ItemCart from "../itemCart/ItemCart";
import './Cart.css'


const Cart2 = () => {
    const { showCart, setShowCart, cartItems, setCartItems } = useContext(DataContext)

    const [cartOpen, setCartOpen] = useState(false)
    const [productsLength, setProductsLength] = useState(0)

    const toogleShowCart = () => {
        setShowCart(!showCart)
    }

    const show1 = showCart ? "shoppingCarts show" : "shoppingCarts"
    const show2 = showCart ? "shoppingCart show" : "shoppingCart"

    useEffect(() => {
        setProductsLength(
            cartItems.reduce((previous, current) => previous + current.amount, 0)
        )
    }, [cartItems])

    const total = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0)

    return (
        <div>
            <div onClick={() => toogleShowCart}>
                <div>
                    {!cartOpen ? (<p>🛒</p>) : (<p>❌</p>)}
                </div>
            </div>
            {cartItems && cartOpen && (
                <div>
                    <h2>Tu Cesta</h2>

                    {cartItems.length === 0 ? (
                        <p>Tu cesta está vacia</p>
                    ) : (
                        <div>
                            {cartItems.map((product) => (
                                <ItemCart key={product._id} item={product} />
                            ))}
                        </div>
                    )}

                    <h2> Total: ${total}</h2>
                </div>
            )}
        </div>
    )
}

export default Cart2
