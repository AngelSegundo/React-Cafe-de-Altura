import { useContext } from "react";
import Cart from "../../Components/cart/Cart";
import Navbar from "../../Components/navBar/Navbar";
import Products from "../../Components/products/Products";
import { DataContext } from "../../context/DataContext";




const Homepage = () => {
    const { data } = useContext(DataContext)
    return (
        <div className="home">
            
            <Products />
        </div>
    )
}

export default Homepage