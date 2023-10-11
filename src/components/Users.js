import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Users = () => {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setToken(e.target.value);
  };

  const handleFetchUsers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5555/user', {
        headers: {
          'x-access-token': token,
        },
      });

      if (response.data && response.data.users) {
        setUsers(response.data.users);
        setError(null); // Clear any previous error message
      } else {
        setError('No users found.');
      }
    } catch (error) {
      setError('Error fetching user data: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            User List
          </h1>
        </div>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              htmlFor="tokenInput"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Enter Token:
            </label>
            <input
              type="text"
              id="tokenInput"
              value={token}
              onChange={handleChange}
              placeholder="Enter your JWT token"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between space-x-4">
            <button
              onClick={handleFetchUsers}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Fetch Users
            </button>
            {/* Add "Go Home" button that links to "/swift" */}
            <Link
              to="/swift"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Go Home
            </Link>
          </div>
        </div>
        {error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <ul className="list-disc list-inside">
            {users.map((user, index) => (
              <li
                key={user.public_id}
                className={`${
                  index % 2 === 0 ? 'bg-indigo-200' : 'bg-white'
                } rounded p-2`}
              >
                <div className="text-gray-700">
                  <div>
                    <label className="font-bold">Name:</label> {user.name}
                  </div>
                  <div>
                    <label className="font-bold">Email:</label> {user.email}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Users;
