import React from "react";
import { graphql } from "gatsby"

import Layout from '../components/layout'
import PostsList from "../components/blog/postsList.js";

require("prismjs/themes/prism.css");

const IndexPage = ({ data }) => (
	<Layout metadata={ data.site.siteMetadata }>
		<PostsList posts={ data.allMarkdownRemark.edges }/>
	</Layout>
)

export default IndexPage

export const pageQuery = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				title
				description
				keywords
			}
		}
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
					fields {
						slug
					}
				}
			}
		}
	}
`;