import { Link, NavLink } from "react-router-dom"
import Button from '../Button/Button'
import Cart from "../cart/Cart"
import Logo from "../../assets/img/coffeCup.png"
import Iconphone from "../../assets/img/Iconphone.png"
import Carr from "../../assets/img/Carr.png"
import './Navbar.css'
import { DataContext } from "../../context/DataContext"
import { useContext } from "react"

const Navbar = () => {
    const { showCart, setShowCart, addItemToCart, cartItems, productsLength } = useContext(DataContext)

    const toogleShowCart = () => {
        setShowCart(!showCart)
    }

    return (
        <nav className="navBar">
            <article className="logo">
                <Link to="/">cafedealtura.com</Link>
                <img src={Logo} alt="Coffe Cup" />
            </article>
            <article className="menuWrapper">
                <Link to="">Tienda</Link>
                <Link to="">Suscipción</Link>
                <Link to="">Para empresas</Link>
                <Link to="">Sobre nosotros</Link>
                <Link to="">Contacto</Link>
            </article>
            <article className="contacLink">
                <div className="phoneContact">
                    <img src={Iconphone} alt="Phone" />
                    <p>+34 919 49 05 18</p>
                </div>
                <div className="logIn">
                    <Button className="ButtonLarge" text="Iniciar sesión" bgColor="#515051" />
                </div>
            </article>
            <div className="shopingCarIcon">
                <div>
                    <img className="cart" src={Carr} alt="Carrito de compras" onClick={toogleShowCart} />
                </div>
                <div className="count-product">
                    <p>{productsLength}</p>
                </div>
            </div>
        </nav >
    )
}

export default Navbar