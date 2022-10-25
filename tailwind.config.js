/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			montserrat: ["Montserrat Alternates"],
			raleway: ["Raleway"],
			"open-sans": ["Open Sans"],
			barlow: ["Barlow"],
			abel: ["Abel"],
			maven: ["Maven Pro"],
		},
		extend: {},
	},
	plugins: [],
};
