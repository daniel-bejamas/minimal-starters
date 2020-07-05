import React from "react"

import { useAuthContext } from "utils/useAuthContext"

export const RegisterForm = ({ inviteToken }) => {
  const { auth } = useAuthContext()

  const [is_loading, set_is_loading] = React.useState()
  const [password, set_password] = React.useState("")

  const update_password = e => set_password(e.target.value)

  const onSubmit = e => {
    e.preventDefault()
    set_is_loading(true)

    auth
      .acceptInvite(inviteToken)
      .then(() => {
        window.location.href = "/"
      })
      .catch(() => {
        set_is_loading(false)
      })
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        isRequired
        type="password"
        name="password"
        placeholder="new password"
        handleChange={update_password}
      />
      <button type="submit" disabled={!password} isLoading={is_loading}>
        {is_loading ? "loading..." : "Submit"}
      </button>
    </form>
  )
}
