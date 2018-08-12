import React from "react";
import PropTypes from "prop-types";
import ListEntry from "../components/blog/listEntry.js";

// Components
import Link from "gatsby-link";

const Tags = ({ pathContext, data }) => {
	const { tag } = pathContext;
	const { edges, totalCount } = data.allMarkdownRemark;
	const tagHeader = `${totalCount} post${
		totalCount === 1 ? "" : "s"
	} tagged with "${tag}"`;

	return (
		<div>
			<Link to="/tags">All tags</Link>
			<h1>{tagHeader}</h1>
			<ul>
				{edges.map(({ node }) => {
					const { path, title } = node.frontmatter;
					return (
						<ListEntry excerpt={node.excerpt} frontmatter={node.frontmatter} timeToRead={node.timeToRead} />
					);
				})}
			</ul>
		</div>
	);
};

Tags.propTypes = {
	pathContext: PropTypes.shape({
		tag: PropTypes.string.isRequired,
	}),
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			totalCount: PropTypes.number.isRequired,
			edges: PropTypes.arrayOf(
				PropTypes.shape({
					node: PropTypes.shape({
						frontmatter: PropTypes.shape({
							path: PropTypes.string.isRequired,
							title: PropTypes.string.isRequired,
						}),
					}),
				}).isRequired
			),
		}),
	}),
};

export default Tags;

export const pageQuery = graphql`
	query TagPage($tag: String) {
		allMarkdownRemark(
			limit: 2000
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { tags: { in: [$tag] } } }
		) {
			totalCount
			edges {
				node {
					excerpt
					frontmatter {
						date
						path
						title
					}
					timeToRead
				}
			}
		}
	}
`;
