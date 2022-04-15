import axios from 'axios'
const API_URL = '/api/uers/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  // Check response
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const authService = {
  register,
}

export default authService
