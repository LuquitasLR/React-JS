import React from 'react';
import "./css/ProductCard.css"
import { useContext } from 'react';
import {Link} from "react-router-dom"
import {CartContext} from "../context/CartContext.jsx"

export const ProductCard= ({product})=> {
    
    const {addProduct, productCartList} = useContext(CartContext);
    const productIndex = productCartList.findIndex(product.id);


    return (

        <ul className="card textCard productBox">
            
            <Link to={`/${product.id}`}><h4>{product.name}</h4></Link>
                <Link to={`/${product.id}`}><img className="img" src={product.urlImg} alt="img" /></Link>
                <h4>$ {product.price}</h4>
                <div className="button"  onClick={()=> addProduct(product, 1)}  ><a >Agregar al carrito</a>
                </div> 
                <h4> {productCartList[productIndex].quantity==0? <></> :<>Cantidad: {productCartList[productIndex].quantity}</>} </h4>           
            </ul>

    )
}