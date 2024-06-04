import { useEffect, useState } from "react";
import axios from "axios";

function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts, "all Products");

  async function getproducts() {
    // alert("Hii From get Products");

    try {
      const response = await axios.get("https://fakestoreapi.com/products/1");
      console.log(response.data);
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

      <div>
        {allProducts.map((product) => (
          <div>
            {/* <img src={product.image} /> */}
            <h1>{product.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
