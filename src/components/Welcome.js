// src/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const containerStyle = {
    backgroundImage: 'url("https://previews.123rf.com/images/aprior/aprior1703/aprior170300039/73560723-cars-for-sale-stock-lot-row-car-dealer-inventory.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Ensure the background covers the entire viewport
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

const titleStyle = {
    fontSize: '3rem', // Adjust the font size as needed
    fontWeight: 'bold',
    marginBottom: '10px', // Add margin at the bottom
    marginTop: '4px', // Add margin at the top
    color: 'black', // Text color
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: '0px',
  };

  

  return (
    <div style={containerStyle}>
        <h1 style={titleStyle}>Welcome to Swift Stock</h1>
      <p className="text-white-700 text-lg mb-4">
        We specialize in providing a wide range of quality cars.
      </p>
      <div style={buttonContainerStyle}>
        <Link to="/login">
          <button className="w-90% bg-blue-500 text-white p-2 px-6 rounded hover:bg-blue-600">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="w-90% bg-green-500 text-white p-2 px-5 rounded hover:bg-green-600">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
