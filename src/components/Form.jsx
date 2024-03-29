import React from 'react';
import "./css/Form.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";
import Swal from 'sweetalert2'
import { useContext } from 'react';
import {CartContext} from "../context/CartContext.jsx"


export const Form =()=> {

    const {productCartList, getTotalProducts, getTotalCost} = useContext(CartContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [direccion, setDireccion] = useState("");
    const [piso, setPiso] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [codigoPostal, setCodigoPostal] = useState("");
    const [mail, setMail] = useState("");


  
    const navigate = useNavigate();
    
    const sendOrder =()=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Orden enviada!',
            showConfirmButton: false,
            timer: 4000,
            width: 550
          })}
  
    const ordersCollection = collection(db, "Orders");
  
    const order = async (e) => {
      e.preventDefault();
      await addDoc(ordersCollection, {
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        piso: piso,
        departamento: departamento,
        codigoPostal: codigoPostal,
        mail: mail,
        products: (productCartList.map((product) => `${product.name}, cantidad: ${product.quantity}`)),
        totalCost: getTotalCost(),
        
      });
      sendOrder ()
      navigate("/")
      
    }


    return(
       <div className='form'>
        <div>
            <h1>Completa el formulario con tus datos para cargar la orden de entrega:</h1>
            <div className='detail'><h2>Detalle del pedido:</h2>
            {productCartList.map((product) =><><h4>{product.name}</h4><h4> Cantidad: {product.quantity}</h4> </> )}
            <h2>Total: ${getTotalCost()}</h2>
            </div>
            </div>
       <form onSubmit={order}>
  <label>
    Nombre:
    <input value={nombre} onChange={(e)=>setNombre(e.target.value)} type="text" name="name" />
  </label>
  <label>
    Apellido:
    <input value={apellido} onChange={(e)=>setApellido(e.target.value)} type="text" name="name" />
  </label>
  <label>
    Dirección:
    <input value={direccion} onChange={(e)=>setDireccion(e.target.value)} type="text" name="name" />
  </label>
  <label>
    Piso:
    <input value={piso} onChange={(e)=>setPiso(e.target.value)} type="text" name="name" />
  </label>
  <label>
    Departamento:
    <input value={departamento} onChange={(e)=>setDepartamento(e.target.value)} type="text" name="name" />
  </label>
  <label>
    Código postal:
    <input value={codigoPostal} onChange={(e)=>setCodigoPostal(e.target.value)} type="number" />
  </label>
  <label>
    Ingresa tu mail:
    <input value={mail} onChange={(e)=>setMail(e.target.value)} type="text" name="name" />
  </label>
  <label>
     Repetir mail:
    <input  type="text" name="name" />
  </label>
  <input  className='submit' type="submit" value="Submit" />
</form>
</div>
       
    )

}