module.exports = {
	siteMetadata: {
		title: "The programming diaries",
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-typography",
			options: {
				pathToConfigModule: "src/utils/typography.js",
			},
		},
		"gatsby-remark-embed-gist",
		"gatsby-remark-prismjs",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/data/blog`,
				name: "markdown-pages",
			},
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					"gatsby-remark-embed-gist",
					"gatsby-remark-prismjs",
				]
			}
		},
	],
}
