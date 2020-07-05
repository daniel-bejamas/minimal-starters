import React from "react"

import Layout from "components/Layout"
import { LoginForm } from "components/Form/login"

const Login = props => (
  <Layout hideIfLoggedIn pageTitle="Login" pageDescription="" {...props}>
    <LoginForm />
  </Layout>
)

export default Login
