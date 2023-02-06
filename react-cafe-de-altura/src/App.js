import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Home/Homepage';
import Navbar from './Components/navBar/Navbar';
import Cart from './Components/cart/Cart';
import Footer from './Components/footer/Footer';
import { CartContextProvider } from './context/CartContext';
import { DataContextProvider } from './context/DataContext';
import Cart2 from './Components/cart/Cart2';


function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <CartContextProvider>
          <Navbar />
          <Cart/>
          <Routes>
            <Route path='/' element={<Homepage />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </DataContextProvider>
    </div>
  );
}

export default App;
