import React from 'react';
import "./css/Form.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";


export const Form =()=> {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [direccion, setDireccion] = useState("");
    const [piso, setPiso] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [codigoPostal, setCodigoPostal] = useState(0);
    const [mail, setMail] = useState("");

  
    const navigate = useNavigate();
  
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
        
      });
      navigate("/")
    }

    return(
       <div className='form'>
       <h2>Completa el formulario con tus datos para cargar la orden de entrega</h2>
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
    <input value={codigoPostal} onChange={(e)=>setCodigoPostal(e.target.value)} type="number" name="name" />
  </label>
  <label>
    Ingresa tu mail:
    <input value={mail} onChange={(e)=>setMail(e.target.value)} type="text" name="name" />
  </label>
  <label>
     Repetí tu mail:
    <input  type="text" name="name" />
  </label>
  <input  className='submit' type="submit" value="Submit" />
</form>
</div>
       
    )

}