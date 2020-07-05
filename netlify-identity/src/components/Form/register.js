import React from "react"
import { navigate } from "gatsby"

import { useAuthContext } from "utils/useAuthContext"

export const RegisterForm = ({ inviteToken }) => {
  const { auth } = useAuthContext()

  const [is_loading, set_is_loading] = React.useState()
  const [password, set_password] = React.useState("")

  const update_password = e => set_password(e.target.value)

  const onSubmit = e => {
    e.preventDefault()
    set_is_loading(true)

    console.log({ auth, inviteToken })

    auth
      .acceptInvite(inviteToken, password, true)
      .then(result => {
        console.log("register", { result })
        navigate("/")
      })
      .catch(error => {
        console.log("register", { error })
        set_is_loading(false)
      })
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        required
        type="password"
        name="password"
        placeholder="new password"
        onChange={update_password}
      />
      <button type="submit" disabled={!password}>
        {is_loading ? "loading..." : "Submit"}
      </button>
    </form>
  )
}
