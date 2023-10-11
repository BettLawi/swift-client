
import React, { useState, useEffect } from 'react';

function Transaction() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => {
        console.error('Error fetching transactions:', error);
      });
  }, []);

  return (
    <div>
      <h2 className="bg-green-500 text-white text-lg font-bold py-4 px-6 rounded-t-lg">
        ALL TRANSACTIONS
      </h2>
      <table className="w-full border-collapse border border-green-400">
        <thead className="bg-green-300">
          <tr>
            <th className="p-2 text-green-700">ID</th>
            <th className="p-2 text-green-700">Product name</th>
            <th className="p-2 text-green-700">Quantity</th>
            <th className="p-2 text-green-700">Price</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction.id} className={index % 2 === 0 ? 'bg-green-100' : 'bg-green-200'}>
              <td className="p-2 border border-green-400">{transaction.id}</td>
              <td className="p-2 border border-green-400">
                {transaction.product_name}
              </td>
              <td className="p-2 border border-green-400">
                {transaction.product_quantity}
              </td>
              <td className="p-2 border border-green-400">
                {transaction.product_price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;