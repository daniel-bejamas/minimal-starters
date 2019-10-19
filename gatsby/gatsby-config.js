require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

module.exports = {
	siteMetadata: {
		siteUrl: process.env.URL || 'localhost:3000',
		title: `title`,
		description: `description`,
		seo: {
			og: {
				type: `website`,
				title: `title`,
				description: `description`,
				image: `/img/og-cover.png`
			}
		}
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `name`,
				short_name: `short_name`, // Max 12 characters
				start_url: `/?utm_source=a2hs`,
				background_color: `#ffffff`,
				theme_color: `#ffff00`,
				display: `minimal-ui`,
				icon: `static/img/icon.png`
			}
		},
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				headers: {
					'/*': [
						`Content-Security-Policy: frame-ancestors 'none';`,
						`X-Frame-Options: DENY`,
						`X-XSS-Protection: 1; mode=block`,
						`X-Content-Type-Options: nosniff`,
						`Referrer-Policy: no-referrer`,
						`Expect-CT: max-age=604800`,
						`Feature-Policy: accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'`,
						`Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
					]
				},
				mergeSecurityHeaders: false
			}
		},
		`gatsby-plugin-netlify-cache`,
		{
			resolve: 'gatsby-plugin-csp',
			options: {
				disableOnDev: true,
				directives: {}
			}
		}
	]
}
