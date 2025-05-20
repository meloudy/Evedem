import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { ImagePlus } from 'lucide-react';
import Navbar from '../components/navbar';
import Footer from './footer';
import '../styles/Sell.css';
import NewProduct from '../api/cat/productnew';
import Call from '../api/call';

function Sell() {
  if (localStorage.getItem("$authkey") == null) {
    localStorage.clear();
    return <Navigate to="/login" />;
  }

  const [productName, setProductName] = useState('');
  const [productHeight, setProductHeight] = useState(0);
  const [productWidth, setProductWidth] = useState(0);
  const [productDepth, setProductDepth] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productColor, setProductColor] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPicture, setProductPicture] = useState(''); // State to hold image URL
  const [isUploading, setIsUploading] = useState(false); // Track uploading state
  const [statusUpload, setStatusUpload] = useState("Upload Picture"); // State to hold img status
  const [selectedFile, setSelectedFile] = useState(null); // State to hold the file.

  const categories = [
    { id: 0, name: 'Armchairs' },
    { id: 1, name: 'Dressing Tables' },
    { id: 2, name: 'Tables' },
    { id: 3, name: 'Beds' },
  ];

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    setStatusUpload("Please Upload a Picture");
    if (!file) return;

    setIsUploading(true);
    setStatusUpload("Uploading...");
    setSelectedFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64String = reader.result;

      try {
        const [data, error] = await Call('/v1/products', 'PUT', { image: base64String }, true);

        if (error) {
          alert(`Image upload failed: ${error}`);
          console.error("Image upload failed:", error);
        } else if (data && data.imageUrl) {
          setProductPicture(data.imageUrl);
          setStatusUpload(`Image ${file.name} Selected`);
          alert("Image uploaded successfully!");
        } else {
          console.error("Unexpected response:", data);
          alert("Image upload failed: Unexpected response.");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        alert(`Error uploading image: ${error}`);
      } finally {
        setIsUploading(false);
      }
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productPicture) {
      alert("Please Upload an image");
      return;
    }
    if (productCategory === '') {
      alert("Please Select a category");
      return; // Stop form submission
    }

    try {
      const [success, error] = await NewProduct(
        productName,
        productHeight,
        productWidth,
        productDepth,
        productQuantity,
        productPrice,
        productCategory,
        productColor,
        productDescription,
        productPicture // Send imageUrl
      );

      if (error) {
        console.error("Product creation failed:", error);
        alert(`Product creation failed: ${error}`);
      } else {
        console.log("Product created successfully:", success);
        alert("Product created successfully!");

        setProductName('');
        setProductHeight(0);
        setProductWidth(0);
        setProductDepth(0);
        setProductQuantity(1);
        setProductPrice('');
        setProductCategory('');
        setProductColor('');
        setProductDescription('');
        setProductPicture('');
        setSelectedFile(null);
        setStatusUpload("Upload Picture"); //Resets the status to upload
      }
    } catch (err) {
      console.error("Error:", err);
      alert(`Something bad happened: ${err}`);
    }
  };

  return (
    <div className="layout">
      <Navbar />
      <h2 style={{ padding: '8px 16px' }}>Sell a product</h2>

      <form className="" onSubmit={handleSubmit}>
        <div className="flex">
          <div className="flexCol">
            <div>
              <label htmlFor="productName">Name</label>
              <input
                className="sell-input"
                placeholder="Name"
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div className="flex" style={{ gap: '1rem' }}>
              <div>
                <label htmlFor="productHeight">Height(cm)</label>
                <input
                  className="sell-input"
                  type="number"
                  min={0}
                  id="productHeight"
                  value={productHeight}
                  onChange={(e) => setProductHeight(parseInt(e.target.value))}
                />
              </div>
              <div>
                <label htmlFor="productWidth">Width(cm)</label>
                <input
                  className="sell-input"
                  type="number"
                  min={0}
                  id="productWidth"
                  value={productWidth}
                  onChange={(e) => setProductWidth(parseInt(e.target.value))}
                />
              </div>
              <div>
                <label htmlFor="productDepth">Depth(cm)</label>
                <input
                  className="sell-input"
                  type="number"
                  min={0}
                  id="productDepth"
                  value={productDepth}
                  onChange={(e) => setProductDepth(parseInt(e.target.value))}
                />
              </div>
            </div>

            <div className='flex' style={{ gap: '1rem' }} >
              <div>
                <label htmlFor="productQuantity">Quantity</label>
                <input
                  className="sell-input"
                  type="number"
                  min={1}
                  id="productQuantity"
                  value={productQuantity}
                  onChange={(e) => setProductQuantity(parseInt(e.target.value))}
                  required
                />
              </div>
              <div>
                <label htmlFor="productPrice">Price</label>
                <input
                  className="sell-input"
                  placeholder="$"
                  type="text" // Consider using type="number" or a library for currency input
                  id="productPrice"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flexBetween" style={{ margin: '2rem 0' }}>
              <label className="button-costum flex" style={{ gap: '1rem', padding: '' }}>
                <ImagePlus size={24} color="white" />
                <span style={{ marginLeft: '5px' }}>{statusUpload}</span>
                <input
                  type="file"
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                  disabled={isUploading}
                />
              </label>
              <button className="button-costum" type='submit' disabled={isUploading || !productPicture || productCategory === ''}>
                Submit
              </button>
            </div>
          </div>
          <div className="flexCol">
            <div>
              <label htmlFor="productCategory">Categories</label>
              <select
                className="sell-select"
                id="productCategory"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="productColor">Color</label>
              <input
                className="sell-input"
                placeholder="Green, White, Black"
                type="text"
                id="productColor"
                value={productColor}
                onChange={(e) => setProductColor(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="productDescription">Description</label>
              <input
                className="sell-input"
                placeholder="Give a brief description for the product"
                type="text"
                id="productDescription"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Sell;
