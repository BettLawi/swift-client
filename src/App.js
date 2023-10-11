// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import Users from './components/Users'; // Import the UserList component
import Swift from './components/Swift'; // Import the Swift component

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/swift-client" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/*" element={<Dashboard />} />

          {/* Add a new route for the UserList component */}
          <Route path="/users" element={<Users />} />

          {/* Add a new route for the Swift component */}
          <Route path="/swift" element={<Swift />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;




