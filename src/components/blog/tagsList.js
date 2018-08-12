import Link from 'gatsby-link'
import { kebabCase } from 'lodash'
import React from 'react'

import styles from "./tagsList.module.css"

const TagsList = ({ tags }) => {
	return tags && tags.length ? (
		<div className={ styles.tagsWrapper }>
			{tags.map(tag => (
				<div key={tag + `tag`} className={ styles.tag }>
					<Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
				</div>
			))}
		</div>
	) : null
}

export default TagsList