import React from 'react';
import { useParams } from 'react-router-dom';
import CreatePost from '../../components/Post/CreatePost';

const CreatePostPage = () => {
  const { userId } = useParams();

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">Create Post Page</h1>
      <CreatePost userId={userId} />
    </div>
  );
};

export default CreatePostPage;
