import React from "react"
import GoTrue from "gotrue-js"

export const AuthContext = React.createContext()

export const useAuthContext = () => React.useContext(AuthContext)

export const AuthContextProvider = ({ authRequired, children }) => {
  const [auth, set_auth] = React.useState()
  const [user, set_user] = React.useState()

  React.useEffect(() => {
    const APIUrl = process.env.GATSBY_NETLIFY_IDENTITY_API_URL
    const setCookie = document.location.host.split(":").shift() === "localhost"

    set_auth(new GoTrue({ APIUrl, setCookie }))
  }, [])

  React.useEffect(() => {
    auth && set_user(auth.currentUser())
  }, [auth])

  if (authRequired && !user) {
    return <div>need to login</div>
  }

  return <AuthContext.Provider value={{ auth, user }}>{children}</AuthContext.Provider>
}
