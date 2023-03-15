import React from 'react';
import "./css/ProductCard.css"
import { useContext } from 'react';
import {Link} from "react-router-dom"
import {CartContext} from "../context/CartContext.jsx"

export const ProductCard= ({product})=> {

   const {} = useContext(CartContext);

    

    return (

        <ul className="card textCard productBox">
            
            <Link to={`/${product.id}`}><h4>{product.name}</h4></Link>
                <Link to={`/${product.id}`}><img className="img" src={product.urlImg} alt="img" /></Link>
                <h4>$ {product.price}</h4>
                <div className="button"><a>Agregar al carrito</a>
                {/* <h4>{productCartList.product.quantity}</h4> */}
                </div>
            </ul>



    )
}
