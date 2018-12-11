import React from 'react'
import { Link } from "gatsby"

import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
	<div className={ styles.wrapper }>
		<div className={ styles.content }>
			<h1 className={ styles.title }>
				<Link to="/" className={ styles.link }>
					{ siteTitle }
				</Link>
			</h1>
		</div>
	</div>
)

export default Header
