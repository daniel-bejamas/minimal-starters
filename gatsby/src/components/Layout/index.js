import React from "react"

import { SEO } from "components/SEO"
import { Header } from "components/Header"
import { Main } from "components/Main"
import { Footer } from "components/Footer"

export const Layout = ({ children, ...seo }) => (
  <>
    <SEO {...seo} />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
)
