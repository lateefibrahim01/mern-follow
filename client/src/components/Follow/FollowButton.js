import React from 'react';
import { followApi } from '../../api/followApi';

const FollowButton = ({ followerId, followingId }) => {
  const handleFollow = async () => {
    try {
      await followApi.followUser(followerId, followingId);
      // Optionally, you can handle success messages or updates here
    } catch (error) {
      console.error('Error following user:', error);
    }
  };

  return (
    <button
      onClick={handleFollow}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Follow
    </button>
  );
};

export default FollowButton;
