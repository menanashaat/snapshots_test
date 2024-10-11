// api.ts
import axios from 'axios'

// Function to fetch users from the API
export const getUsers = async () => {
  const response = await axios.get('https://61cb0d6d194ffe0017788b36.mockapi.io/Users')
  return response.data // Return the fetched data
}
