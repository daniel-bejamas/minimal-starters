import React from "react"

import Layout from "components/Layout"
import { LoginForm } from "components/Form/login"

const Login = props => (
  <Layout pageTitle="Home" pageDescription="" {...props}>
    <LoginForm />
  </Layout>
)

export default Login
