import React, { useState, useEffect } from 'react';
import { userApi } from '../../api/userApi';

const UserProfile = ({ userId }) => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const response = await userApi.getUserProfile(userId);
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    }

    fetchUserProfile();
  }, [userId]);

  if (!userProfile) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">User Profile</h2>
      <p className="text-gray-800 mb-2">Name: {userProfile.name}</p>
      <p className="text-gray-800 mb-4">Email: {userProfile.email}</p>
      {/* Display other user profile information */}
    </div>
  );
};

export default UserProfile;
