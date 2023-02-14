import products from "../products.json"
import ProductCard from "./ProductCard.jsx"


export default function ProductsFilter({serch}) {
  
    let selection = products.filter(product => product.category.includes(serch))      
    return (
            <div>
        {selection.map((product) => (
          <ProductCard price={product.price} name={product.name} img={product.urlImg}  />
        ))}
      </div>
    );
  }
