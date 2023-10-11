// src/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    axios
      .post('https://swiftinventory2023-f984d0fc6c43.herokuapp.com/signup', {
        name,
        email,
        password,
      })
      .then((response) => {
        const token = response.data.token;
        console.log('Signup successful', token);

        // Store the token in localStorage
        localStorage.setItem('token', token);

        // Redirect to the Swift Store page
        window.location = '/swift';
      })
      .catch((error) => {
        console.error('Signup error:', error);
        setError('Signup failed. Please try again.');
      });
  };

  return (
    
    <div className="bg-white shadow-md rounded justify-center px-8 pt-6 pb-8 mb-4 w-1/3 mx-auto mt-10">
    <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
    
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        onClick={handleSignup}
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
      >
        Signup
      </button>
      <p className="mt-4">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
