import React from 'react'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'

import styles from "./backToTopButton.module.css"

function scrollToTopFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function updateVisibility() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById(styles.toTopButton).style.display = "block";
	} else {
		document.getElementById(styles.toTopButton).style.display = "none";
	}
}

class BackToTopButton extends React.Component {

	componentDidMount() {
		window.onscroll = function() { updateVisibility() };
	}

	render() { return (
		<div id={ styles.toTopButton } onClick={ () => scrollToTopFunction() }>
			<FontAwesomeIcon icon={faChevronCircleUp} size="3x"/>
		</div>
	)}
}

export default BackToTopButton