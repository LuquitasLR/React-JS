import "./css/ProductDetailCard.css"
import { useState,useEffect } from "react";
import {collection,getDocs,} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import {CartContext} from "../context/CartContext.jsx"


export default function ProductDetailCard () {

    const {addProduct} = useContext(CartContext);

    const [products,setProducts] = useState([])
    
    const productsColletion = collection (db,"MoonLight")
    
    const getProducts = async ()=>{
    const data = await getDocs (productsColletion)
    setProducts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
        
    useEffect(()=>{
        getProducts()
    },[])
    
    return (
        (products.map((product) =>(
            <Routes>
         <Route path={`/${product.id}`} element={            
        
        <div  className="card textCard detailCard">         
            <h1>{product.name}</h1>
        <div>
            <img className="detail" src={product.urlImg} alt="img" />
        </div>
        <h4>$ {product.price}</h4>
        <div className="description">
            <p>
                {product.detail}
            </p>
        </div>
        <div className="button" id="centrar" onClick={()=>addProduct(product, 1)}><a >Agregar al carrito</a></div>
        </div>}/>
            </Routes>  

        )) )
        



    )
}