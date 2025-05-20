import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from '../components/navbar.jsx';
import Product from '../components/product.jsx';
import fetchprod from '../api/cat/fetchprod';
import '../styles/Product.css';
import '../images.d.ts';
import { apihost } from '../api/call'


const categories = {
  0: "Armchairs",
  1: "Dressing Tables",
  2: "Tables",
  3: "Beds"
}

function CategoryProducts() {
  const {catId} = useParams()
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState(null); // To display the category name

  useEffect(() => {
    // Check if catId is valid before making API call
    if (catId in categories) {
      setCategoryName(categories[catId]);

      // Call your API to fetch products for the selected category
      async function fetchProducts() {
        console.log("catid "+ catId)
        try {
          const resp  = await fetchprod(parseInt(catId, 10))
          if (!resp[1]) {
            if (resp[0]?.category_found && resp[0]?.products) {
              setProducts(resp[0].products);
            }
          } else {
            throw new Error(`API call failed with error: ${resp[1]}`);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
          // Handle error (e.g., display an error message)
        }
      }

      fetchProducts();
    } else {
      console.warn(`Invalid catId: ${catId}`);
      // Optionally, set an error state or redirect to an error page
    }
  }, [catId]);


  return (
    <div className="w-100">
      <Navbar />
      <p className="logo2">Evedem</p>
      {categoryName ? (
        <p className="armchairs-style">{categoryName}</p>
      ) : (
        <p className="armchairs-style">Invalid Category</p>
      )}
      <div>
        <div className="row d-flex">
          {products.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3" key={product.productId}>
              <Product
                imageUrl={apihost +  "/v1/products/img?filename=" + product.picture}
                name={product.product_name}
                width={product.width}
                height={product.height} 
                depth={product.depth}
                price={product.price}
                color={product.color} 
                status={product.quantity > 0 ? `In Stock: ${product.quantity}` : "Out of Stock"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryProducts;
