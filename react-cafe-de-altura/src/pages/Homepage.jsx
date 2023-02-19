import { useContext } from "react";
import Acordion from "../Components/Acordion/Acordion";
import Cards from "../Components/Cards/Cards";
import FeatureSection from "../Components/FeatureSection/FeatureSection";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Products from "../Components/Products/Products";
import SplitDesktop from "../Components/SplitDesktop/SplitDesktop";
import { DataContext } from "../context/DataContext";



const Homepage = () => {
    const { data } = useContext(DataContext)
    return (
        <div className="home">
            <Hero />
            <Cards />
            <Products title={"Novedades"} showProducts={4} link="Ver todos →" />
            <Acordion />
            <FeatureSection />
            <SplitDesktop />
            <Footer />
        </div>
    )
}

export default Homepage