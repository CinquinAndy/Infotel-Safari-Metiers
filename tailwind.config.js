/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/pages/*.{js,ts,jsx,tsx}',
		'./src/Components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {},
	plugins: [require('@tailwindcss/aspect-ratio')],
}
