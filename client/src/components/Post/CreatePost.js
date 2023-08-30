import React, { useState } from 'react';
import { postApi } from '../../api/postApi';

const CreatePost = ({ userId }) => {
  const [content, setContent] = useState('');

  const handleCreatePost = async () => {
    try {
      await postApi.createPost({ userId, content });
      // Optionally, you can handle success messages or navigation here
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Create New Post</h2>
      <textarea
        className="border rounded-lg w-full p-2 mb-4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="4"
        placeholder="Write your post..."
      />
      <button
        onClick={handleCreatePost}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Create Post
      </button>
    </div>
  );
};

export default CreatePost;
