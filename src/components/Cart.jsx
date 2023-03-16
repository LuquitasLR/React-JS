import "./css/Cart.css"
import { useState,useEffect } from "react";
import {ProductCard} from "./ProductCard.jsx"
import React from 'react';
import { useContext } from 'react';
import {Link} from "react-router-dom"
import {CartContext} from "../context/CartContext.jsx"

export default function Cart () {
    
    const {productCartList, removeProduct, clearProductCartList} = useContext(CartContext);
        
        return ( 
            <div className="cart">
                <h1>Carrito</h1>

                {
                productCartList.lenght!=0 ?
                <>
                <div onClick={()=> clearProductCartList()} className="button clear"><h4>Vaciar carrito</h4></div>
                <div className="cartCard">
                {productCartList.map((product) => (
                    <div>
                        <ProductCard className="card" product={product} />
                        <div className="delete">
                        <div className="button" onClick={()=>removeProduct(product.id)}><h4>Eliminar</h4></div>
                        </div>
            
                    </div>
                ))}
                </div>
                </>
                 :
                <h3>El carrito esta vacio...</h3>
                }
            </div>

        )
}


    