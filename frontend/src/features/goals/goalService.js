import axios from 'axios'
const API_URL = '/api/goals/'

// Fetch Goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Create a goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, goalData, config)

  return response.data
}

// Create a goal
const deleteGoal = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + id, config)

  return response.data
}

const goalService = {
  getGoals,
  createGoal,
  deleteGoal,
}

export default goalService
