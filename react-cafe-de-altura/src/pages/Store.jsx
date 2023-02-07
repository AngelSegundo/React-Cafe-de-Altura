import React from 'react'
import Cards from '../Components/Cards/Cards'
import Footer from '../Components/Footer/Footer'
import Products from '../Components/products/Products'


const Store = () => {
    return (
        <div className='Store'>
            <Products title="Últimos origenes" link="" />
            <Cards />
            <Footer />
        </div>
    )
}

export default Store