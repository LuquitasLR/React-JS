import {useState, useEffect} from 'react'
//import {link} from 'react-router-dom'
import {collection,getDocs} from 'firebase/firestore'
import {db} from '../firebaseConfig/firebase.js'
//import {ProductCard} from './ProductCard.jsx'

//import Swal from 'sweetalert2'
//import withReactContent from 'sweetalert2-react-content'

//const MySwal = withReactContent(Swal)

const Show = () => {

    //Configuracion de Hooks
    const [products,setProducts] = useState([])
    //Me conecto a la DB
    const productsCollection = collection (db,"MoonLight")

    //Funcion para mostrar los productos
    const getProducts = async () => {
        //en data.docs van a estar los productos
        const data = await getDocs (productsCollection)
        
        setProducts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        
    }

    //useEffect
    useEffect(()=> {getProducts()},[])

    return (

    <div>
    {products.map((product)=>(
        <>
        <h1>holi</h1>
    <h2>{product.id}</h2>
        <h4>{product.name}</h4>
        <img src ={product.urlImg} alt="img"></img>

    </>
    
    
    ))}
    
    </div>
        
    )
    

}

export default Show