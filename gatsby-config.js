module.exports = {
	siteMetadata: {
		title: "/dev/null",
		description: "Personal blog, which mainly contains tutorial on how to perform specific development tasks",
		keywords: "blog, software, engineering, development",
		disqusShortname: "pasdam-github-io",
	},
	plugins: [
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-20503043-3",
				head: false,
				anonymize: true,
				respectDNT: true,
			},
		},
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
				"excerpt_separator": `<!-- intro_end -->`,
				plugins: [
					"gatsby-remark-autolink-headers",
					"gatsby-remark-embed-gist",
					"gatsby-remark-prismjs",
				]
			}
		},
	],
}
