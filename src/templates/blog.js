import React from "react";
import TagsList from "../components/blog/tagsList.js"

import styles from "./blog.module.css"

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}) {
	const { markdownRemark } = data; // data.markdownRemark holds our post data
	const { frontmatter, html, tableOfContents, timeToRead } = markdownRemark;

	return (
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
	);
}

export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
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