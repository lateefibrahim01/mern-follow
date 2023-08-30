import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Your backend URL

export const userApi = {
  getUserProfile: (userId) => axios.get(`${BASE_URL}/users/${userId}`),
  updateUserProfile: (userId, userData) => axios.put(`${BASE_URL}/users/${userId}`, userData),
  // Add more API methods as needed
};
