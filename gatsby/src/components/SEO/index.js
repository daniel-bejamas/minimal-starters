import React from 'react'
import { StaticQuery, withPrefix, graphql } from 'gatsby'
import Helmet from 'react-helmet'

export default ({ pageTitle, pageDescription, pathname = '/' }) => (
	<StaticQuery
		query={graphql`
			query SeoQuery {
				site {
					siteMetadata {
						siteUrl
						title
						description
						seo {
							og {
								# fbAppId
								type
								title
								description
								image
							}
							# twitter {
							#   creator
							#   card
							# }
						}
					}
				}
			}
		`}
		render={data => {
			const { siteUrl, title, description, seo } = data.site.siteMetadata

			return (
				<Helmet>
					<title>{pageTitle || title}</title>
					<meta name='description' content={pageDescription || description} />
					<meta name='image' content={siteUrl + withPrefix(seo.og.image)} />

					{/* OpenGraph tags */}
					{seo.og.fbAppId && <meta property='fb:app_id' content={seo.og.fbAppId} />}
					<meta property='og:url' content={siteUrl + pathname} />
					<meta property='og:type' content={seo.og.type} />
					<meta property='og:title' content={seo.og.title || title} />
					<meta property='og:description' content={pageDescription || seo.og.description || description} />
					<meta property='og:image' content={siteUrl + withPrefix(seo.og.image)} />

					{/* Twitter Card tags */}
					{seo.twitter && seo.twitter.card && <meta name='twitter:card' content={seo.twitter.card} />}
					{seo.twitter && seo.twitter.creator && <meta name='twitter:creator' content={seo.twitter.creator} />}
					<meta name='twitter:title' content={title} />
					<meta name='twitter:description' content={pageDescription || description} />
					<meta name='twitter:image' content={siteUrl + withPrefix(seo.og.image)} />
				</Helmet>
			)
		}}
	/>
)
