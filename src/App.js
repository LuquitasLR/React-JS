import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Inicio from './components/Inicio';
import ProductsList from './components/ProductList.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsFilter from './components/ProductFilter.jsx';
import ProductDetailCard from './components/ProductDetailCard'
import products from "./products.json"


function App () {

    return (

        <div>
        <BrowserRouter>
        <Routes>
        </Routes>
        <NavBar/>
        <Inicio title="Bienvenido a Moon Light" intro="Somos la tienda gaming mas grande de Argentina" buy="Compra lo que necesitas y te lo llevamos a la puerta de tu casa"/>
        <div id='grid'>
        <ItemListContainer greeting= "Lista de productos"/>
        <Routes>
        <Route path="/" element={<ProductsList/>}/>
        <Route path="/procesadores" element={<ProductsFilter serch ="procesador"/>} />
        <Route path="/mothers" element={<ProductsFilter serch ="mother"/>}/>
        {products.map((product) => (
         <Route path={`/${product.id}`} element={<ProductDetailCard price={product.price} name={product.name} img={product.imgBig} detail={product.detail}/>}/>
        ))}
        </Routes> 
        </div>
        </BrowserRouter>
        </div>

        

    )

}

export default App; 