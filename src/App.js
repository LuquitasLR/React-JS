import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Inicio from './components/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsFilter from './components/ProductFilter.jsx';
import ProductDetailCard from './components/ProductDetailCard.jsx'
import Show from "./components/Show.jsx"
import Banner1 from "./components/Banner1.jsx"
import Cart from "./components/Cart.jsx"
import {CartProvider} from './context/CartContext';

function App () {

    return (
        <CartProvider>
        <div>
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path="/" element={<><Banner1/>
        <Inicio title="Bienvenido a Moon Light" intro="Somos la tienda gaming mas grande de Argentina" buy="Compra lo que necesitas y te lo llevamos a la puerta de tu casa"/></>}/>
        </Routes> 
        <div id="conteiner">
        <Routes>
        <Route path="/store" element={<><ItemListContainer/><Show/></>}/>
        <Route path="/procesadores" element={<><ItemListContainer/><ProductsFilter serch ="procesador"/></>} />
        <Route path="/mothers" element={<><ItemListContainer/><ProductsFilter serch ="mother"/></>}/>
        <Route path='/cart' element={<Cart />}/>
        </Routes>
        <ProductDetailCard /> 
        </div>
        </BrowserRouter>
        </div>
        </CartProvider>
        

    )

}

export default App; 