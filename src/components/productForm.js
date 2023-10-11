import React, { useState } from 'react';

function ProductForm() {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    quantity: '',
    price: '',
  });

  const [deleteId, setDeleteId] = useState('');
  const [deleteQuantity, setDeleteQuantity] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDeleteChange = (e) => {
    setDeleteId(e.target.value);
  };

  const handleDeleteQuantityChange = (e) => {
    setDeleteQuantity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://swiftinventory2023-f984d0fc6c43.herokuapp.com/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([formData]),
      });

      if (response.ok) {
        alert('Product added successfully');
      } else {
        alert('Failed to add product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeleteSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://swiftinventory2023-f984d0fc6c43.herokuapp.com/products/${deleteId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([{ quantity: deleteQuantity }]),
      });

      if (response.ok) {
        alert(`Successfully deleted ${deleteQuantity} items of product with ID ${deleteId}`);
        setDeleteId('');
        setDeleteQuantity('');
      } else {
        alert('Failed to delete product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-screen-lg mx-auto p-6 flex space-x-4">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6 text-green-500">Add a Product</h2>
          <form onSubmit={handleSubmit} className="bg-gray-200 p-4 rounded-lg border border-black">
            <div className="mb-4">
              <label htmlFor="id" className="block font-bold mb-1">ID:</label>
              <input
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                className="w-full py-2 px-3 border border-black rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block font-bold mb-1">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-2 px-3 border border-black rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block font-bold mb-1">Price:</label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full py-2 px-3 border border-black rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="block font-bold mb-1">Quantity:</label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full py-2 px-3 border border-black rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
            >
              Confirm
            </button>
          </form>
        </div>

        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6 text-green-500">Delete a Product</h2>
          <form onSubmit={handleDeleteSubmit} className="bg-gray-200 p-4 rounded-lg border border-black">
            <div className="mb-4">
              <label htmlFor="deleteId" className="block font-bold mb-1">Product ID to Delete:</label>
              <input
                type="text"
                id="deleteId"
                name="deleteId"
                value={deleteId}
                onChange={handleDeleteChange}
                className="w-full py-2 px-3 border border-black rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="deleteQuantity" className="block font-bold mb-1">Quantity to Delete:</label>
              <input
                type="text"
                id="deleteQuantity"
                name="deleteQuantity"
                value={deleteQuantity}
                onChange={handleDeleteQuantityChange}
                className="w-full py-2 px-3 border border-black rounded-md"
              />
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
            >
              Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
