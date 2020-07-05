import React from "react"
import { Link } from "gatsby"
import GoTrue from "gotrue-js"

import { LogoutForm } from "components/Form/logout"
import { LoginForm } from "components/Form/login"

export const AuthContext = React.createContext()

export const useAuthContext = () => React.useContext(AuthContext)

export const AuthContextProvider = ({ showIfLoggedIn, hideIfLoggedIn, children }) => {
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

  if (hideIfLoggedIn && user) {
    return (
      <div>
        {"page unavailable when logged in, "}
        <Link to="/logout">logout</Link>
      </div>
    )
  }

  if (showIfLoggedIn && !user) {
    return (
      <div>
        <Link to="/login">login</Link>
        {" to access this page"}
      </div>
    )
  }

  return <AuthContext.Provider value={{ auth, user }}>{children}</AuthContext.Provider>
}
