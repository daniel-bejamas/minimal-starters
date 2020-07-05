import React from "react"
import { navigate } from "gatsby"

import { useAuthContext } from "utils/useAuthContext"

export const LogoutForm = () => {
  const { user } = useAuthContext()

  const [is_loading, set_is_loading] = React.useState()

  const onSubmit = e => {
    e.preventDefault()
    set_is_loading(true)

    user
      .logout()
      .then(result => {
        console.log("logout", { result })
        navigate("/")
      })
      .catch(error => {
        console.log("logout", { error })
        set_is_loading(false)
      })
  }

  return (
    <form onSubmit={onSubmit}>
      <button type="submit" disabled={is_loading}>
        {is_loading ? "loading..." : "logout"}
      </button>
    </form>
  )
}
