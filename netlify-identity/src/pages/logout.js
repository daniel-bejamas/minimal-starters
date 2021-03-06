import React from "react"

import Layout from "components/Layout"
import { LogoutForm } from "components/Form/logout"

const Logout = props => (
  <Layout showIfLoggedIn pageTitle="Logout" pageDescription="" {...props}>
    <LogoutForm />
  </Layout>
)

export default Logout
