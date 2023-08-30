import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Your backend URL

export const followApi = {
  followUser: (followerId, followingId) => axios.post(`${BASE_URL}/follows/follow`, { followerId, followingId }),
  unfollowUser: (followerId, followingId) => axios.post(`${BASE_URL}/follows/unfollow`, { followerId, followingId }),
  // Add more API methods as needed
};
