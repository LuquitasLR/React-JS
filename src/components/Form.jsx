import React from 'react';
import "./css/Form.css"
import { useContext } from 'react';
import {Link} from "react-router-dom"
import {CartContext} from "../context/CartContext.jsx"


export const Form =()=> {

    return(
       <div className='form'>
       <h2>Completa el formulario con tus datos para cargar la orden de entrega</h2>
       <form>
  <label>
    Nombre:
    <input type="text" name="name" />
  </label>
  <label>
    Apellido:
    <input type="text" name="name" />
  </label>
  <label>
    Direccion:
    <input type="text" name="name" />
  </label>
  <label>
    Direccion:
    <input type="text" name="name" />
  </label>
  <label>
    Piso:
    <input type="text" name="name" />
  </label>
  <label>
    Departamento:
    <input type="text" name="name" />
  </label>
  <label>
    Código postal:
    <input type="text" name="name" />
  </label>
  <label>
    Ingresa tu mail:
    <input type="text" name="name" />
  </label>
  <label>
     Repetí tu mail:
    <input type="text" name="name" />
  </label>
  <input className='submit' type="submit" value="Submit" />
</form>
</div>
       
    )

}