import './Products.css'
import { DataContext } from '../../context/DataContext'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import Loader from '../loader/Loader'


const Products2 = (props) => {

    const { showProducts } = props
    const { data, fetching } = useContext(DataContext)
    
    return (
        <div className='cards'>
            <h2>Novedades</h2>
            <div className='cardsWrapper'>
                {fetching && <Loader />}
                {data.slice(0, showProducts).map((product) => (
                    <div key={product._id} className="product">
                        <img alt={product.brand} src={product.img_url} />
                        <div>
                            <h3 className="cardBrand">{product.brand}</h3>
                            <h4 className="cardPrice"> {product.price.toFixed(2)}€</h4>
                        </div>
                        <button onClick={() => console.log(product)} className='buttonSmall'>Añadir</button>
                        {/* <Button className="ButtonSmall" text="Añadir" bgColor="#2A5B45" addItemToCart=/> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products2