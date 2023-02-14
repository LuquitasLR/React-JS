import './css/ItemListContainer.css'
import { Link } from 'react-router-dom';

const ItemListContainer =({greeting}) => {

    return(
        <>
        <section id='lista'>
            <h2 ><Link to="/">{greeting}</Link></h2>
            <ul>
                <li><Link to='/procesadores'>Procesadores</Link></li>
                {/* <li><a href=''>AMD</a></li>
                <li><a href=''>Intel</a></li> */}
                <li><Link to='/mothers'>Mothers</Link></li>
                {/* <li><a href=''>Placas de video</a></li>
                <li><a href=''>AMD</a></li>
                <li><a href=''>NVIDIA</a></li> */}
            </ul>
        </section>

        </>

    )


}


export default ItemListContainer;