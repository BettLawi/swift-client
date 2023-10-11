import React, { useState } from 'react';

const SalesForm = () => {
  const [formData, setFormData] = useState({
    product_name: '',
    product_quantity: '',
    product_price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([formData]), // Send data as an array
      });
      if (response.ok) {
        // Successful response, handle it here
        console.log('Sales data posted successfully');
        // Optionally, reset the form fields
        setFormData({
          product_name: '',
          product_quantity: '',
          product_price: '',
        });
      } else {
        // Handle error response here
        console.error('Failed to post sales data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="mx-auto max-w-md p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Sales Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="product_name" className="block text-gray-700 font-semibold">
            Product Name
          </label>
          <input
            type="text"
            id="product_name"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="product_quantity" className="block text-gray-700 font-semibold">
            Product Quantity
          </label>
          <input
            type="number"
            id="product_quantity"
            name="product_quantity"
            value={formData.product_quantity}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="product_price" className="block text-gray-700 font-semibold">
            Product Price
          </label>
          <input
            type="number"
            id="product_price"
            name="product_price"
            value={formData.product_price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-green-500"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SalesForm;