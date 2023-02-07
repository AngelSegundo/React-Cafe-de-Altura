import { Link } from 'react-router-dom'
import './FeatureSection.css'
import Iconarrowblack from '../../assets/img/Iconarrowblack.png'
import Store from '../../assets/img/Store.png'


const FeatureSection = () => {
    return (
        <div className="featureSection">
            <div className=" featureSectionWrapper">
                <div className="container contentFeatureSection">
                    <h2>
                        Pruébalo en nuestro coffee shop
                    </h2>
                    <p className="paragraph">
                        Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de
                        hacer tu pedido y llévate un descuento
                    </p>
                    <div className="container link-icon">
                        <Link to="">Cómo llegar</Link>
                        <picture className="heroImg">
                            <img src={Iconarrowblack} alt="Arrow" />
                        </picture>
                    </div>
                </div>
                <picture className="store">
                    <img src={Store} alt="" />
                </picture>
            </div>
        </div>
    )
}

export default FeatureSection