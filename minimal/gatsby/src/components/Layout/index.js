import React from 'react'

import SEO from 'components/SEO'
import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'

const Layout = ({ pageTitle, pageDescription, location, children }) => (
	<>
		<SEO pageTitle={pageTitle} pageDescription={pageDescription} pathname={location.pathname} />
		<Header />
		<Main>{children}</Main>
		<Footer />
	</>
)

export default Layout
