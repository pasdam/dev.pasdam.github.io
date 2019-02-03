module.exports = {
	siteMetadata: {
		title: "/dev/null",
		description: "Personal blog, which mainly contains tutorial on how to perform specific development tasks",
		keywords: "blog, software, engineering, development",
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
					"gatsby-remark-autolink-headers",
					"gatsby-remark-embed-gist",
					"gatsby-remark-prismjs",
				]
			}
		},
	],
}
