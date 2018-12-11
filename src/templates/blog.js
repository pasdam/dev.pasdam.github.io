import React from "react";
import { graphql } from 'gatsby'

import TagsList from "../components/blog/tagsList.js"
import Layout from "../components/layout.js"

import styles from "./blog.module.css"

export default function Template({ data }) {
	const { frontmatter, html, tableOfContents, timeToRead } = data.markdownRemark;

	return (
		<Layout metadata={ data.site.siteMetadata }>
			<div>
				<h1 className={ styles.title }>{frontmatter.title}</h1>
				<div className={ styles.date }>{frontmatter.date} - {timeToRead} min read</div>
				<hr />
				<TagsList tags={frontmatter.tags} />
				<hr />
				<div dangerouslySetInnerHTML={{ __html: tableOfContents }} className="toc" />
				<hr />
				<div
					dangerouslySetInnerHTML={{ __html: html }}
				/>
				<hr />
			</div>
		</Layout>
	);
}

export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
				tags
			}
			html
			tableOfContents
			timeToRead
		}
	}
`;
