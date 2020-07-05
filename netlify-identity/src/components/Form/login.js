import React from "react"
import { navigate } from "gatsby"

import { useAuthContext } from "utils/useAuthContext"

export const LoginForm = () => {
  const { auth } = useAuthContext()

  const [is_loading, set_is_loading] = React.useState()
  const [email, set_email] = React.useState("")
  const [password, set_password] = React.useState("")

  const update_email = e => set_email(e.target.value)
  const update_password = e => set_password(e.target.value)

  const onSubmit = e => {
    e.preventDefault()
    set_is_loading(true)

    console.log({ auth, email })

    auth
      .login(email.trim(), password, true)
      .then(result => {
        console.log("login", { result })
        navigate("/")
      })
      .catch(error => {
        console.log("login", { error })
        set_is_loading(false)
      })
  }

  return (
    <form onSubmit={onSubmit}>
      <input required type="email" name="email" placeholder="email" onChange={update_email} />
      <input
        required
        type="password"
        name="password"
        placeholder="password"
        onChange={update_password}
      />
      <button type="submit" disabled={!password || is_loading}>
        {is_loading ? "loading..." : "Login"}
      </button>
    </form>
  )
}
