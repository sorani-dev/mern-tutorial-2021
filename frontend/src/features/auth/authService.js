import axios from "axios";

const API_URL = '/api/users/'

/**
 * Register user
 * @param {Object} userData 
 */
const register = async (userData) => {
    const response = await axios.post(`${API_URL}`, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
        return response.data
    }
}

/**
 * Login user
 * @param {Object} userData 
 */
const login = async (userData) => {
    const response = await axios.post(`${API_URL}login`, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
        return response.data
    }
}

/**
 * Logout user
 */
const logout = async () => {
    localStorage.removeItem('user')
}


const authService = {
    login,
    logout,
    register,
}

export default authService