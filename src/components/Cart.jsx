import "./css/Cart.css"
import {ProductCard} from "./ProductCard.jsx"
import React from 'react';
import { useContext } from 'react';
import {Link} from "react-router-dom"
import {CartContext} from "../context/CartContext.jsx"

export default function Cart () {
    
    const {productCartList, removeProduct, clearProductCartList,getTotalCost} = useContext(CartContext);
        
        return ( 
            <div className="cart">
                <h1>Carrito</h1>

                {
                productCartList.lenght ==0?
                <><h3>El carrito esta vacio...</h3></>
                
                 :
                 <>
                 <div onClick={()=> clearProductCartList()} className="button clear"><h4>Vaciar carrito</h4></div>
                 <div className="cartCard">
                 {productCartList.map((product) => (
                     <div key={product.id}>
                         <ProductCard  className="card" product={product} />
                         <div className="delete">
                         <div className="button" onClick={()=>removeProduct(product.id)}><h4>Eliminar</h4></div>
                         </div>
                     </div>
                 ))}
                 </div>
                 <div className="payment buy">
                     <Link to="/payment">
                     <div id="pay" className="button "><h4>Finalizar compra</h4></div>
                     </Link>
                     
                     <div id="payText"><h2 >Total carrito: ${getTotalCost()}</h2></div>
                     
                 </div>
                 </>
                }
            </div>

        )
}


    