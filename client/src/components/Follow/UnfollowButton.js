import React from 'react';
import { followApi } from '../../api/followApi';

const UnfollowButton = ({ followerId, followingId }) => {
  const handleUnfollow = async () => {
    try {
      await followApi.unfollowUser(followerId, followingId);
      // Optionally, you can handle success messages or updates here
    } catch (error) {
      console.error('Error unfollowing user:', error);
    }
  };

  return (
    <button
      onClick={handleUnfollow}
      className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Unfollow
    </button>
  );
};

export default UnfollowButton;
