import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  function getAllProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ol>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <img src={product.image} width={200} height={200} alt="" />
            <span>Rating: {product.rating.rate}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Products;
