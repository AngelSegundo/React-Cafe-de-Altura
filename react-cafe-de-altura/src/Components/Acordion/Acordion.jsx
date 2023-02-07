import React from 'react'
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Acordion.css'
import { Link } from 'react-router-dom';

const Acordion = () => {
    return (
        <div className='acordeonSection'>
            <h3>Preguntas Frecuentes</h3>
            <Accordion defaultActiveKey={['0']} className='acordeonBox'>
                <Accordion.Item eventKey="1" className='Item' >
                    <Accordion.Header ><span>¿Cómo hago el pedido?</span></Accordion.Header>
                    <Accordion.Body>
                        Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='Item'>
                    <Accordion.Header ><span>¿Por qué los precios son tan bajos?</span></Accordion.Header>
                    <Accordion.Body>
                        Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='Item'>
                    <Accordion.Header><span>¿Es posible enviar café a mi oficina?</span></Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Link to="/" className='flechaC'>Resolvemos tus dudas →</Link>
        </div>
    );
}

export default Acordion