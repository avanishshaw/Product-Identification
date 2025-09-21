// src/pages/ResultPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const ResultPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        // The URL for our backend API endpoint
        const { data } = await axios.get(`http://localhost:5001/api/products/${productId}`);
        setProduct(data);
        setError('');
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch product data.');
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <h1 className="text-4xl font-bold mb-6 text-cyan-400">Verification Result</h1>
      {loading && <p className="text-xl text-yellow-400">Verifying...</p>}
      {error && <ProductCard isError={true} message={error} />}
      {product && <ProductCard product={product} />}
      
      <Link to="/" className="mt-8 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
        Scan Another Product
      </Link>
    </div>
  );
};

export default ResultPage;