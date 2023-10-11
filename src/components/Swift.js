import React from 'react';
import { Link } from 'react-router-dom';

const Swift = () => {
  const containerStyle = {
    background: 'linear-gradient(to right, #00a859, #007849)',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.2rem',
    padding: '8px 16px',
    background: '#00a859',
    borderRadius: '4px',
    margin: '0 10px',
  };

  const carDescriptionStyle = {
    fontSize: '1.2rem',
    marginTop: '20px',
  };

  return (
    <div style={containerStyle}>
      <nav>
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/" style={linkStyle}>
              Logout
            </Link>
          </li>
          <li>
            <Link to="/users" style={linkStyle}>
              Users
            </Link>
          </li>
          <li>
            <Link to="/dashboard" style={linkStyle}>
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container mx-auto max-w-sm">
        <h1 style={titleStyle}><br/>Welcome to Swift Store</h1>
        <p>
          Welcome to Swift Store, where you can find the latest and greatest cars.
          Explore our wide selection of cars, from sleek sedans to powerful SUVs.
          Our cars are designed for style and performance, ensuring an exhilarating driving experience.
        </p>
        <p style={carDescriptionStyle}>
          Whether you're looking for a family car or a sports car, we have something for everyone.
          Visit our showroom today and drive home in your dream car.
        </p>
      </div>
    </div>
  );
};

export default Swift;
