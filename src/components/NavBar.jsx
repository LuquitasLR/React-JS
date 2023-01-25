import './css/NavBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {CartWidget} from "./CartWidget"
import logo from '../imagenes/logo.png'

const NavBar = () => {

    return (
        <header className="header">
            
            <div className="logo">
               <img src= {logo}alt="logo" />  
            </div>
            
            <nav className="nav">
                <ul>                
                <li><a href="">Inicio</a></li>
                <li><a href="">Tienda</a></li>
                <li><a href="">Nosotros</a></li>
                <li><a href="">Ubicacion</a></li>
                <li><a href="">Contacto</a></li>  
                </ul>
 
            </nav>
            <div>
            <CartWidget/>
            </div> 

        </header>
    )

}

export default NavBar