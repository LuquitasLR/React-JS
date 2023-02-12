import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Inicio from './components/Inicio';
import Show from './components/Show';


function App () {

    return (
        <>
        <NavBar/>
        <Inicio title="Bienvenido a Moon Light" intro="Somos la tienda gaming mas grande de Argentina" buy="Compra lo que necesitas y te lo llevamos a la puerta de tu casa"/>
        <ItemListContainer greeting= "Lista de productos"/>
        <Show/>
        </>

    )

}

export default App; 