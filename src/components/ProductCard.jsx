import "./css/ProductCard.css"

export default function ProductCard (product) {
    return (

        <ul className="card textCard productBox">
            
                <h4>{product.name}</h4>
                <img className="img" src={product.img} alt="img" />
                <h4>$ {product.price}</h4>
                <div className="button "><a href="">Agregar al carrito</a></div>
            </ul>



    )
}
