import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from 'gatsby'
import Helmet from "react-helmet";

// Utilities
import kebabCase from "lodash/kebabCase";

// Components
import Layout from "../components/layout.js"

const TagsPage = ({ data }) => (
	<Layout metadata={ data.site.siteMetadata }>
		<Helmet title={ data.site.siteMetadata.title } />
		<div>
			<h1>Tags</h1>
			<ul>
				{data.allMarkdownRemark.group.map(tag => (
					<li key={tag.fieldValue}>
						<Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
							{tag.fieldValue} ({tag.totalCount})
						</Link>
					</li>
				))}
			</ul>
		</div>
	</Layout>
);

TagsPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			group: PropTypes.arrayOf(
				PropTypes.shape({
					fieldValue: PropTypes.string.isRequired,
					totalCount: PropTypes.number.isRequired,
				}).isRequired
			),
		}),
		site: PropTypes.shape({
			siteMetadata: PropTypes.shape({
				title: PropTypes.string.isRequired,
			}),
		}),
	}),
};

export default TagsPage;

export const pageQuery = graphql`
	query TagsQuery {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark(
			limit: 1000
		) {
			group(field: frontmatter___tags) {
				fieldValue
				totalCount
			}
		}
	}
`;