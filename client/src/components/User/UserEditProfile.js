import React, { useState } from 'react';
import { userApi } from '../../api/userApi';

const UserEditProfile = ({ userId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleUpdateProfile = async () => {
    try {
      await userApi.updateUserProfile(userId, { name, email });
      // Optionally, you can handle success messages or navigation here
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Edit User Profile</h2>
      <div className="mb-4">
        <label className="block text-gray-800">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-800">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <button
        onClick={handleUpdateProfile}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Update Profile
      </button>
    </div>
  );
};

export default UserEditProfile;
