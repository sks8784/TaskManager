import axios from "axios"
const instance = axios.create({
    baseURL:"https://taskmanager-ei22.onrender.com/api"
})
export default instance