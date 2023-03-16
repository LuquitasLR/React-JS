import './css/ItemListContainer.css'
import { Link } from 'react-router-dom';

const ItemListContainer =() => {

    return(
        <>
        <section id='lista'>
            <h2 ><Link to="/store">Lista de productos</Link></h2>
            <ul>
                <li><Link to='/procesadores'>Procesadores</Link></li>
                <li><Link to='/mothers'>Mothers</Link></li>
            </ul>
        </section>

        </>

    )


}


export default ItemListContainer;