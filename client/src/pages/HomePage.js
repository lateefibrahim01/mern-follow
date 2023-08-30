import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Home</h1>
      <Link
        to="/profile"
        className="block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-2 focus:outline-none focus:shadow-outline"
      >
        Go to Profile
      </Link>
      <Link
        to="/create-post"
        className="block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Create Post
      </Link>
    </div>
  );
};

export default Home;
