import React from 'react'
import Button from '../Button/Button'
import './Hero.css'
import heroImage from '../../assets/img/HeroImage.png'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className="hero">
            <div className="heroWrapper">
                <div className="content">
                    <h3 className="preTittle">De la planta a tu taza</h3>
                    <h1>El mejor café del mundo, ahora en tu casa.</h1>
                    <p className='paragraph'>Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.</p>
                    <div className="button">
                        <Button className="ButtonLarge" text="Descubrir orígenes" bgColor="#1F1815" />
                        <Link to="/Store"><Button className="ButtonLarge" text="Comprar café" bgColor="#2A5B45" /></Link>
                    </div>
                </div>
                <picture className="heroImg">
                    <img src={heroImage} alt="Semillas de Café" />
                </picture>
            </div>
        </div>
    )
}

export default Hero