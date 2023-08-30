import React from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from '../../components/User/UserProfile';
import UserEditProfile from '../../components/User/UserEditProfile';
import UserPosts from '../../components/Post/UserPosts';

const UserProfilePage = () => {
  const { userId } = useParams();

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">User Profile Page</h1>
      <UserProfile userId={userId} />
      <UserEditProfile userId={userId} />
      <UserPosts userId={userId} />
    </div>
  );
};

export default UserProfilePage;
