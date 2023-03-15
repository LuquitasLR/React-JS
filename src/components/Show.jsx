import { useState,useEffect } from "react";
import {collection,getDocs,} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"
import {ProductCard} from "./ProductCard.jsx"

//1 configurar los hooks
export default function Show () {
const [products,setProducts] = useState([])

//2 referenciar a la db de firestore

const productsColletion = collection (db,"MoonLight")

//3 funcion para mostrar todos los documentos
const getProducts = async ()=>{
const data = await getDocs (productsColletion)
setProducts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
}

//6 use useEffect

useEffect(()=>{
    getProducts()
},[])

return ( 
    <div>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
    
    
    </div>
)
}
