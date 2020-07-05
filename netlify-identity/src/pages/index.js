import React from "react"

import Layout from "components/Layout"
import { LogoutForm } from "components/Form/logout"

const Home = props => (
  <Layout showIfLoggedIn pageTitle="Home" pageDescription="" {...props}>
    page visible only when logged in
    <LogoutForm />
  </Layout>
)

export default Home
