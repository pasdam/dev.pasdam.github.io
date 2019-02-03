import React from 'react'
import Helmet from 'react-helmet'

import BackToTopButton from './backToTopButton.js'
import Header from './header.js'

import favicon from './favicon.png';

require("prismjs/themes/prism.css");

const Layout = ({ children, metadata }) => (
	<div>
		<Helmet
			title={metadata.title}
			meta={[
				{ name: 'description', content: metadata.description },
				{ name: 'keywords', content: metadata.keywords },
			]}
			link={[
				{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
			]}
		/>
		<Header siteTitle={metadata.title} />
		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '0px 1.0875rem 1.45rem',
				paddingTop: 0,
			}}
		>
			{ children }
		</div>
		<BackToTopButton />
	</div>
)

export default Layout
