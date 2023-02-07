import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useContext } from 'react'
import ProductCard from '../productCard/ProductCard'
import { DataContext } from '../../context/DataContext'


const Carousel = () => {
    const { data } = useContext(DataContext)
    const sortDataByPrice = data.sort((a, b) => a.price - b.price, 0)

    sortDataByPrice.map((product) => {
        if (!product.available) {
            sortDataByPrice.splice(sortDataByPrice.indexOf(product), 1)
            sortDataByPrice.push(product)
        }
    })

    return (
        <AliceCarousel
            autoWidth
            infinite
            mouseTracking
            items={< ProductCard products={sortDataByPrice} showProducts={4} />} />
    )
}

export default Carousel