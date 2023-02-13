import products from "../products.json"
import ProductCard from "./ProductCard.jsx"

export default function ProductsList() {
  
    return (
      <div>
        {products.map((product) => (
          <ProductCard price={product.price} name={product.name} img={product.urlImg}  />
        ))}
      </div>
    );
  }
