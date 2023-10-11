// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // function ProductList() {
// //   const [products, setProducts] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [searchResults, setSearchResults] = useState([]);

// //   useEffect(() => {
// //     // Fetch data from your Flask API
// //     axios.get('/products')
// //       .then((response) => {
// //         setProducts(response.data);
// //       })
// //       .catch((error) => {
// //         console.error('Error fetching data:', error);
// //       });
// //   }, []); // Empty dependency array to fetch data once when the component mount

// //   useEffect(() => {
// //     // Filter products based on the search query
// //     const filteredProducts = products.filter((product) =>
// //       product.name.toLowerCase().includes(searchQuery.toLowerCase())
// //     );
// //     setSearchResults(filteredProducts);
// //   }, [searchQuery, products]);

// //   return (
// //     <div className="bg-green-100 min-h-screen flex flex-col lg:flex-row lg:justify-between">
// //       {/* Left Content */}
// //       <div className="lg:w-3/4 p-4">
// //         <h2 className="text-2xl mb-4">Product List</h2>
// //         <div className="products-grid">
// //           {searchResults.map((product) => (
// //             <div key={product.id} className="products-card mb-4 p-4 border rounded-lg">
// //               <h3>{product.name}</h3>
// //               <p>Price: ${product.price}</p>
// //               <p>Quantity: {product.quantity}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Right Content (Search Bar) */}
// //       <div className="lg:w-1/4 bg-green-500 p-4">
// //         <h2 className="text-white text-2xl mb-4">Search</h2>
// //         <input
// //           type="text"
// //           placeholder="Search products..."
// //           className="w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-300"
// //           value={searchQuery}
// //           onChange={(e) => setSearchQuery(e.target.value)}
// //         />
// //       </div>
// //     </div>
// //   );
// // }

// // export default ProductList;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     // Fetch data from your Flask API
//     axios.get('/products')
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []); // Empty dependency array to fetch data once when the component mounts

//   useEffect(() => {
//     // Filter products based on the search query
//     const filteredProducts = products.filter((product) =>
//       product.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//     setSearchResults(filteredProducts);
//   }, [searchQuery, products]);

//   return (
//     <div>
//       <div className="bg-green-500 p-4 mb-4">
//         <h2 className="text-white text-2xl mb-2">Product List</h2>
//         <input
//           type="text"
//           placeholder="Search products..."
//           className="w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-300"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>
//       <div className="products-grid">
//         {searchResults.map((product) => (
//           <div key={product.id} className="products-card">
//             <h3>{product.name}</h3>
//             <p>Price: ${product.price}</p>
//             <p>Quantity: {product.quantity}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch data from your Flask API
    axios
      .get('https://swiftinventory2023-f984d0fc6c43.herokuapp.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to fetch data once when the component mounts

  useEffect(() => {
    // Filter products based on the search query
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredProducts);
  }, [searchQuery, products]);

  return (
    <div>
      <div className="bg-green-500 p-4 mb-4">
        <h2 className="text-white text-2xl mb-2">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-3 py-2 pl-10 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute top-2 left-3 text-green-500">
            <i className="fas fa-search"></i> {/* Assuming you are using Font Awesome for the lens icon */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {searchResults.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md transform transition hover:scale-110 hover:bg-green-100"
          >
            <h3 className="text-green-600 font-semibold">{product.name}</h3>
            <p className="text-gray-700">Price: ${product.price}</p>
            <p className="text-gray-700">Quantity: {product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;