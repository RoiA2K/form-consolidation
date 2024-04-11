import React, { createContext, useState } from "react"

const AuthContext = createContext({})

export default AuthContext

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null)
  const [dummyData, setDummyData] = useState("testosterone")

  const contextData = {
    auth: auth,
    setAuth: setAuth,
    dummyData: dummyData,
  }

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  )
}

export { AuthProvider }
