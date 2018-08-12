import React from "react";
import ListEntry from "../components/blog/listEntry.js";

const BlogIndex = ({
	data: {
		allMarkdownRemark: { edges },
	},
}) => {
	const Posts = edges
		.filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
		.map(edge => <ListEntry key={edge.node.id} excerpt={edge.node.excerpt} frontmatter={edge.node.frontmatter} timeToRead={edge.node.timeToRead} />);

	const posts = edges

	return <div>{Posts}</div>;
};

export default BlogIndex;

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						path
						title
					}
					timeToRead
				}
			}
		}
	}
`;