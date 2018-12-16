import React from "react";
import { Link } from "gatsby"

import styles from "./listEntry.module.css"

const ListEntry = ({ excerpt, frontmatter, timeToRead, path }) => {
	const firstChar = frontmatter.title.charAt(0);

	return (
	<article>
		<h2>
			<span className={ styles.letter }>{firstChar}</span>
			<Link className={ styles.title} to={path}>{frontmatter.title}</Link>
		</h2>
		<div className={ styles.subtitle }>{frontmatter.date} &mdash; {timeToRead} Min Read</div>
		<p>{ excerpt }</p>
	</article>
  )
}

export default ListEntry;