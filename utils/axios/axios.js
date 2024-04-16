import axios from "axios"

axios.defaults.baseURL = "http://192.168.1.27:8000/api"
axios.defaults.withCredentials = true

export default axios.create()

export const axiosPrivate = axios.create()
