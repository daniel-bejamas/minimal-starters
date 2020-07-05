import React from "react"

import { useAuthContext } from "utils/useAuthContext"

export const RegisterForm = ({ inviteToken }) => {
  const { auth } = useAuthContext()

  const [is_loading, set_is_loading] = React.useState()
  const [new_password, set_new_password] = React.useState("")

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
        handleChange={set_new_password}
      />
      <button type="submit" disabled={!new_password} isLoading={is_loading}>
        {is_loading ? "loading..." : "Submit"}
      </button>
    </form>
  )
}
