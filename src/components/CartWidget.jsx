import "./css/CartWidget.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { useContext } from 'react';
import {Link} from "react-router-dom"
import {CartContext} from "../context/CartContext.jsx"


const CartWidget = () => {

    const {getTotalProducts} = useContext(CartContext);

    return (

        <div className="cart-widget">
            <div>
            <FontAwesomeIcon icon={faCartShopping} size= "2x" color= "white"/> 
            </div>
        <div className="qt-display">
            <h2>{getTotalProducts()}</h2>
            </div>
        </div>

    )

}

export {CartWidget}