import {ProductCard} from "./ProductCard.jsx"
import { useState,useEffect } from "react";
import {collection,getDocs,} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"

export default function ProductsFilter({serch}) {

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

  
    let selection = products.filter(product => product.category.includes(serch))      
    return (
            <div>
        {selection.map((product) => (
          <ProductCard product={product}  />
        ))}
      </div>
    );
  }
