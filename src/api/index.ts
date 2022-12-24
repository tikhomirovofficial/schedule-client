import axios from 'axios'

const api = axios.create({
    baseURL: 'https://63a761407989ad3286efbb1e.mockapi.io/api'
})
export default api