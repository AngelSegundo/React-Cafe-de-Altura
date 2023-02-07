import './ProductCard.css'
import Button from '../Button/Button'
import { CartContext } from '../../context/CartContext'
import { DataContext } from '../../context/DataContext'
import { useContext, useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Loader from '../loader/Loader'

const ProductCard = (props) => {

    const { data, fetching, addItemToCart } = useContext(DataContext)
    const { products, showProducts } = props

    return (
        <div className='cardsWrapper'>
            {fetching && <Loader />}
            {products.slice(0, showProducts).map((product) => (
                <div div className={product.available ? "product" : "notAvailable"} key={product._id} >
                    <img alt={product.brand} src={product.img_url} />
                    <div>
                        <h3 className="cardBrand">{product.brand}</h3>
                        <h4 className="cardPrice"> {product.price.toFixed(2)}€</h4>
                    </div>
                    <Button className="ButtonSmall" text="Añadir" bgColor="#2A5B45" click={() => addItemToCart(product)} />
                </div>
            )
            )
            }
        </div >
    )
}

export default ProductCard

