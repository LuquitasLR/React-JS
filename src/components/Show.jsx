import { useState,useEffect } from "react";
//import {Link} from "react-router-dom"
import {collection,getDocs,} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"
import {ProductCard} from "./ProductCard.jsx"


//1 configurar los hooks
export default Show = ()=>{
const [products,setProducts] = useState([])

//2 referenciar a la db de firestore

const productsColletion = collection (db,"MoonLight")

//3 funcion para mostrar todos los documentos
const getProducts = async ()=>{
const data = await getDocs (productsColletion)
//console.log(data.docs)
setProducts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
}

//6 use useEffect

useEffect(()=>{
    getProducts()
},[])

return ( 
    <div>
        {products.map((product) => (
            <ProductCard id={product.id} price={product.price} name={product.name} img={product.urlImg} />
        )) }
    </div>
)




}