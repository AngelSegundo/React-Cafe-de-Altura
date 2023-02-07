import React from 'react'
import CardsInfo from '../CardsInfo/CardsInfo'
import './Cards.css'
import Icon from '../../assets/img/Icon.png'
import Truck from '../../assets/img/Truck.png'
import gifIcon from '../../assets/img/gifIcon.png'



function Cards() {
    return (
        <section className="Cards">
            <h2>Café con las mejores condiciones</h2>
            <div className="container cardWrapper">
                <article className="conditions">
                    <picture>
                        <img className='conditionsImg' src={Icon} alt=""/>
                    </picture>
                    <h3>Recibe tu pedido sin preocuparte</h3>
                    <p>Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te
                        quedarás
                        sin tu taza de la mañana. </p>
                </article>
                <article className="conditions">
                    <picture>
                        <img src={Truck} alt=""/>
                    </picture>
                    <h3>Envío en 24/48h</h3>
                    <p>Pide tu café antes de las 12h y lo recibirás al día siguiente.</p>
                </article>
                <article className="conditions">
                    <picture>
                        <img src={gifIcon} alt=""/>
                    </picture>
                    <h3>Descuentos y beneficios</h3>
                    <p>Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a
                        nosotros.</p>
                </article>
            </div>
        </section>
    )
}

export default Cards