import React, { useState, useEffect } from 'react';
import { postApi } from '../../api/postApi';

const UserPosts = ({ userId }) => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    async function fetchUserPosts() {
      try {
        const response = await postApi.getUserPosts(userId);
        setUserPosts(response.data);
      } catch (error) {
        console.error('Error fetching user posts:', error);
      }
    }

    fetchUserPosts();
  }, [userId]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">User Posts</h2>
      {userPosts.map((post) => (
        <div key={post._id} className="border p-4 mb-4 rounded-lg shadow-sm">
          <p className="text-gray-800">{post.content}</p>
          {/* Display other post details */}
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
