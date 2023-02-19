import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import Navbar from './Components/NavBar/Navbar';
import Cart from './Components/Cart/Cart';
import Copyright from './Components/Copyright/Copyright';
import { CartContextProvider } from './context/CartContext';
import { DataContextProvider } from './context/DataContext';
import Store from './pages/Store';
import Cesta from './pages/Cesta';



function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <Navbar />
        <Cart />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/store' element={<Store />} />
          <Route path='/cesta' element={<Cesta />} />
        </Routes>
        <Copyright />
      </DataContextProvider>
    </div>
  );
}

export default App;
