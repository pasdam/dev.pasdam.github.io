import React from 'react'
import { Link } from "gatsby"

const NotFoundPage = () => (
	<div>
		<h1>404</h1>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		<Link to="/">Go back</Link>
	</div>
)

export default NotFoundPage
