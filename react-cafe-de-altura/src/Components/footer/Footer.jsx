import React from 'react'
import './Footer.css'
import coffeCup from '../../assets/img/coffeCup.png'
import Iconphone from '../../assets/img/Iconphone.png'
import mailIcon from '../../assets/img/mailIcon.png'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'



const Footer = () => {
    return (
        <footer >
            <div className="footerWrapper">
                <div className="containr logo">
                    <Link to="">cafedealtura.com</Link>
                    <img src={coffeCup} alt="Coffe Cup" />
                </div>
                <div className="linksContac">
                    <div className="contactWraper">
                        <article>
                            <p>Te ayudamos en</p>
                        </article>
                        <article className="mailAndPhone">
                            <Link to="">
                                <img src={Iconphone} alt="Phone" />
                                <p>+34 919 49 05 18</p>
                            </Link>
                        </article>
                        <article className="mailAndPhone">
                            <Link to="">
                                <img src={mailIcon} alt="Icon Mail" />
                                <p>hola@cafedealtura.com</p>
                            </Link>
                        </article>
                    </div>
                    <div className="menuFooter">
                        <Link to="/Store">Tienda</Link>
                        <Link to="">Suscipción</Link>
                        <Link to="">Para empresas</Link>
                        <Link to="">Sobre nosotros</Link>
                        <Link to="">Contacto</Link>
                    </div>
                    <div className="FooterTerm">
                        <Link to="">Política de privacidad</Link>
                        <Link to="">Política de cookies</Link>
                        <Link to="">Términos y condiciones</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer