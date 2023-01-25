import "./css/CartWidget.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"

const CartWidget = () => {

    return (

        <div className="cart-widget">
            <div>
            <FontAwesomeIcon icon={faCartShopping} size= "2x" color= "white"/> 
            </div>
        <div className="qt-display">
            <h2>0</h2>
            </div>
        </div>

    )

}

export {CartWidget}