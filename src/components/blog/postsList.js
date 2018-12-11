import React from "react";

import ListEntry from "./listEntry.js";

const PostsList = ({ posts }) => {
	posts = posts
		.filter(post => !!post.node.frontmatter.date)
		.map(post => <ListEntry key={post.node.id} excerpt={post.node.excerpt} frontmatter={post.node.frontmatter} timeToRead={post.node.timeToRead} />);

	return <div>{ posts}</div>;
};

export default PostsList
