import "./css/ProductCard.css"
import {Link} from "react-router-dom"

export default function ProductCard (product) {
    return (

        <ul className="card textCard productBox">
            
            <Link to={`/${product.id}`}><h4>{product.name}</h4></Link>
                <Link to={`/${product.id}`}><img className="img" src={product.img} alt="img" /></Link>
                <h4>$ {product.price}</h4>
                <div className="button "><a href="">Agregar al carrito</a></div>
            </ul>



    )
}
