import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Inicio from './components/Inicio';
import ProductsList from './components/ProductList.jsx';


function App () {

    return (
        <>
        <NavBar/>
        <Inicio title="Bienvenido a Moon Light" intro="Somos la tienda gaming mas grande de Argentina" buy="Compra lo que necesitas y te lo llevamos a la puerta de tu casa"/>
        <div id='grid'>
            <ItemListContainer greeting= "Lista de productos"/>
            <ProductsList/>
        </div>
       
        </>

    )

}

export default App; 