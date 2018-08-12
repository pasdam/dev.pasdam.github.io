import Typography from "typography";
import theme from "typography-theme-fairy-gates";

theme.overrideThemeStyles = ({ rhythm }, options) => ({
	'a': {
		"background": "none",
		"color": "green",
		"text-shadow": "none",
	},
	"hr": {
		"margin": "1em 0",
	},
	'p': {
		"margin": "1em 0",
		"text-align": "justify",
	},
})

const typography = new Typography(theme);

export default typography;