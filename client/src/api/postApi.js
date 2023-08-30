import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Your backend URL

export const postApi = {
  createPost: (post) => axios.post(`${BASE_URL}/posts/create`, post),
  getUserPosts: (userId) => axios.get(`${BASE_URL}/posts/user/${userId}`),
  getFeedPosts: (userId) => axios.get(`${BASE_URL}/posts/feed/${userId}`),
  // Add more API methods as needed
};
