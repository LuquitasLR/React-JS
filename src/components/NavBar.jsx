import './css/NavBar.css';
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
//import {faBars} from "@fortawesome/free-solid-svg-icons"
import {CartWidget} from "./CartWidget"
import logo from '../imagenes/logo.png'
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <header className="header">
            
            <div className="logo">
               <Link to="/"><img src= {logo}alt="logo" /></Link>  
            </div>
            
            <nav className="nav">
                <ul>                
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/tienda">Tienda</Link></li>
                <li><Link to="/">Nosotros</Link></li>
                <li><Link to="/">Ubicacion</Link></li>
                <li><Link to="/">Contacto</Link></li>  
                </ul>
 
            </nav>
            <div>
            <CartWidget/>
            </div> 

        </header>
    )

}

export default NavBar