import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby"

import ListEntry from "../components/blog/listEntry.js";
import Layout from '../components/layout'

const TagPage = ({ pageContext, data }) => {
	const { tag } = pageContext;
	const { edges, totalCount } = data.allMarkdownRemark;
	const tagHeader = `${totalCount} post${
		totalCount === 1 ? "" : "s"
	} tagged with "${tag}"`;

	return (
		<Layout metadata={ data.site.siteMetadata }>
			<div>
				<Link to="/allTags">All tags</Link>
				<h1>{tagHeader}</h1>
				<ul>
					{edges.map(({ node }) => {
						return (
							<ListEntry key={node.id} excerpt={node.excerpt} frontmatter={node.frontmatter} timeToRead={node.timeToRead} path={node.fields.slug}/>
						);
					})}
				</ul>
			</div>
		</Layout>
	);
};

TagPage.propTypes = {
	pageContext: PropTypes.shape({
		tag: PropTypes.string.isRequired,
	}),
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			totalCount: PropTypes.number.isRequired,
			edges: PropTypes.arrayOf(
				PropTypes.shape({
					node: PropTypes.shape({
						frontmatter: PropTypes.shape({
							date: PropTypes.string.isRequired,
							title: PropTypes.string.isRequired,
						}),
						fields: PropTypes.shape({
							slug: PropTypes.string.isRequired,
						})
					}),
				}).isRequired
			),
		}),
	}),
};

export default TagPage;

export const pageQuery = graphql`
	query TagPage($tag: String) {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(
			limit: 2000
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { tags: { in: [$tag] } } }
		) {
			totalCount
			edges {
				node {
					id
					excerpt
					frontmatter {
						date
						title
					}
					timeToRead
					fields {
						slug
					}
				}
			}
		}
	}
`;
