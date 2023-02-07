import React from 'react'
import './SplitDesktop.css'
import greyphone from '../../assets/img/greyphone.png'
import greymail from '../../assets/img/greymail.png'
import { Link } from 'react-router-dom'

const SplitDesktop = () => {
    return (
        <div className="Split-Desktop">
            <div className=" leadingContent">
                <div className="contactSection">
                    <h3>Entra en contacto con nosotros</h3>
                    <p>Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo antes posible.</p>
                    <p>También puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono de la tienda.</p>
                    <p>742 Evergreen Terrace<br/>Sprinfield, OR 12345</p>
                    <p><img src={greyphone} alt="Phone" /> + 1(555)123-4567</p>
                    <p><img src={greymail} alt="email" />&nbsp;&nbsp;support@example.com </p>
                    <p>¿Buscas un trabajo? <Link to=""><strong>Ver nuestras ofertas.</strong></Link></p>

                </div>
                <div className="trailingContent">
                    <h1>Formulario</h1>

                </div>
            </div>
        </div>
    )
}

export default SplitDesktop