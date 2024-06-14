import { useEffect, useState } from "react";
import axios from "axios";

function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(allProducts, "all Products");

  async function getproducts() {

    setLoading(true)
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setAllProducts(response.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <div>
      <h1>All Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {loading ? (
          <div style={{alignItems:"center"}}>
            <h1 >Loading</h1>
          </div>
        ) : (
          allProducts.map((product) => (
            <div
              key={product.id}
              style={{
                width: "calc(25% - 16px)",
                border: "2px solid black",
                padding: "8px",
                boxSizing: "border-box",
              }}
            >
              <img
                style={{ width: "100%", height: "200px", objectFit: "contain" }}
                src={product.image}
                alt="product"
              />
              <h2 style={{ fontSize: "16px" }}>{product.title}</h2>
              <p style={{ fontSize: "16px" }}>${product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AllProducts;
