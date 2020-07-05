import React from "react"

import SEO from "components/SEO"
import Header from "components/Header"
import Main from "components/Main"
import Footer from "components/Footer"

import { AuthContextProvider } from "utils/useAuthContext"

const Layout = ({ authRequired, children, ...seo }) => (
  <AuthContextProvider authRequired={authRequired}>
    <SEO {...seo} />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </AuthContextProvider>
)

export default Layout
