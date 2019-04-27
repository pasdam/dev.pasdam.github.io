import React from "react";
import { graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react';

import TagsList from "../components/blog/tagsList.js"
import Layout from "../components/layout.js"

import styles from "./blog.module.css"

export default function Template({ data }) {
	const { frontmatter, html, id, tableOfContents, timeToRead } = data.markdownRemark;
	const disqusConfig = {
		identifier: id,
		title: frontmatter.title,
	};

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
				<DiscussionEmbed shortname={ data.site.siteMetadata.disqusShortname } config={ disqusConfig } />
			</div>
		</Layout>
	);
}

export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		site {
			siteMetadata {
				disqusShortname
				title
			}
		}
		markdownRemark( fields: { slug: { eq: $path } } ) {
			id
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
				tags
			}
			html
			tableOfContents(pathToSlugField: "fields.slug")
			timeToRead
			fields {
				slug
			}
		}
	}
`;
