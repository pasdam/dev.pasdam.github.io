const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");
const _ = require('lodash')

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;

	const blogPostTemplate = path.resolve(`src/templates/blog.js`);
	const tagTemplate = path.resolve("src/templates/tag.js");

	return graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							path
							tags
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors);
		}

		const posts = result.data.allMarkdownRemark.edges;

		posts.forEach(({ node }) => {
			createPage({
				path: node.frontmatter.path,
				component: blogPostTemplate,
				context: {}, // additional data can be passed via context
			});
		});

		// Tag pages:
		let tags = [];
		// Iterate through each post, putting all found tags into `tags`
		_.each(posts, edge => {
			if (_.get(edge, "node.frontmatter.tags")) {
				tags = tags.concat(edge.node.frontmatter.tags);
			}
		});
		// Eliminate duplicate tags
		tags = _.uniq(tags);

		// Make tag pages
		tags.forEach(tag => {
			createPage({
				path: `/tags/${_.kebabCase(tag)}/`,
				component: tagTemplate,
				context: {
					tag,
				},
			});
		});
	});
};

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` })
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}
};
