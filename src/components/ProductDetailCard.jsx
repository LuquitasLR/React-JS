import "./css/ProductDetailCard.css"


export default function ProductDetailCard (product) {
    return (

        <div  className="card textCard productBox detailCard">
            
                <h1>{product.name}</h1>
                <div>
                    <img className="detail" src={product.img} alt="img" />
                </div>
                <h4>$ {product.price}</h4>
                <div className="description">
                    <p>
                        {product.detail}
                    </p>
                </div>
                <div className="button" id="centrar"><a href="">Agregar al carrito</a></div>
        </div>



    )
}