import './Products.css'
import { useContext, useEffect, useState } from 'react'
import ProductCard from '../productCard/ProductCard'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'

const Products = () => {

    const { data } = useContext(DataContext)
    const sortDataByPrice = data.sort((a, b) => a.price - b.price, 0)

    sortDataByPrice.map((product) => {
        if (!product.available) {
            sortDataByPrice.splice(sortDataByPrice.indexOf(product), 1)
            sortDataByPrice.push(product)
        }
    })

    return (
        <div className='cards'>
            <h2>Novedades</h2>
            <div className='cardsWrapper'>
                {<ProductCard products={sortDataByPrice} showProducts={4} />}
            </div>
            <Link to="/Shop" className='arrowBlack'>Ver todos →</Link>
        </div>
    )
}

export default Products