import axios from "../axios/axios"
import useAuth from "./useAuth"

const useRefreshToken = () => {
  const { setAuth } = useAuth()

  const refresh = async () => {
    const res = await axios.get("/auth/refresh")
    setAuth((prev) => {
      return { ...prev, ...res.data.user }
    })
    return res.data.user.token
  }
  return refresh
}

export default useRefreshToken
