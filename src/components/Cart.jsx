import { useState,useEffect } from "react";
import {ProductCard} from "./ProductCard.jsx"
import React from 'react';
import { useContext } from 'react';
//import {Link} from "react-router-dom"
import {CartContext} from "../context/CartContext.jsx"

export default function Cart () {
    
    //const {addProduct} = useContext(CartContext);
        
        return ( 
            <div>
                <h1>Carrito</h1>
            {/* <div>
                
                {cart.map((product) => (
                 <ProductCard id={product.id} price={product.price} name={product.name} img={product.urlImg} />
                ))}
            
            </div> */}
            </div>

        )
        }

    