import React, { useState, useEffect } from 'react';
import { postApi } from '../../api/postApi';

const FeedPosts = ({ userId }) => {
  const [feedPosts, setFeedPosts] = useState([]);

  useEffect(() => {
    async function fetchFeedPosts() {
      try {
        const response = await postApi.getFeedPosts(userId);
        setFeedPosts(response.data);
      } catch (error) {
        console.error('Error fetching feed posts:', error);
      }
    }

    fetchFeedPosts();
  }, [userId]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Feed Posts</h2>
      {feedPosts.map((post) => (
        <div key={post._id} className="border p-4 mb-4 rounded-lg shadow-sm">
          <p className="text-gray-800">{post.content}</p>
          {/* Display other post details */}
        </div>
      ))}
    </div>
  );
};

export default FeedPosts;
