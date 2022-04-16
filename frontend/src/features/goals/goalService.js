import axios from 'axios'
const API_URL = '/api/goals/'

// Create a goal
const createGoal = async (goalData) => {
  const response = await axios.post(API_URL, goalData)
  return response.data
}

const goalService = {
  createGoal,
}

export default goalService
