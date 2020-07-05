import React from "react"
import { navigate } from "gatsby"

import { useAuthContext } from "utils/useAuthContext"

export const RecoveryForm = ({ recoveryToken }) => {
  const { auth, user } = useAuthContext()

  const [is_loading, set_is_loading] = React.useState()
  const [password, set_password] = React.useState("")

  React.useEffect(() => {
    console.log({ user })

    user &&
      user
        .update({ password })
        .then(result => {
          console.log("password-change", { result })
          navigate("/")
        })
        .catch(error => {
          console.log("password-change", { error })
          set_is_loading(false)
        })
  }, [user])

  const update_password = e => set_password(e.target.value)

  const onSubmit = e => {
    e.preventDefault()
    set_is_loading(true)

    console.log({ auth, recoveryToken })

    auth
      .recover(recoveryToken, true)
      .then(result => {
        console.log("password-recovery", { result })
      })
      .catch(error => {
        console.log("password-recovery", { error })
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
      <button type="submit" disabled={!password || is_loading}>
        {is_loading ? "loading..." : "Submit"}
      </button>
    </form>
  )
}
