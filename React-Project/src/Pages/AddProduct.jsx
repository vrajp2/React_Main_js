import axios from 'axios';
import React, { useState } from 'react';
import "../App.css";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    image: '',
    title: '',
    price: '',
    category: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({...productData, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/Product", productData)
      .then(response => {
        alert('Product Added Successfully');
        console.log(response.data);
        setProductData({
          image: '',
          title: '',
          price: '',
          category: '',
          description: ''
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <h2>Add Product</h2><br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="image"
          placeholder="Enter image URL"
          value={productData.image}
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        /><br /><br />
        <input
          type="text"
          name="title"
          placeholder="Enter Product Title"
          value={productData.title}
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        /><br /><br />
        <input
          type="text"
          name="price"
          placeholder="Enter Product Price"
          value={productData.price}
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        /><br /><br />
        <input
          type="text"
          name="category"
          placeholder="Enter Product Category"
          value={productData.category}
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        /><br /><br />
        <input
          type="text"
          name="description"
          placeholder="Enter Product Description"
          value={productData.description}
          onChange={handleChange}
          style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        /><br /><br />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>ADD-PRODUCT</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
