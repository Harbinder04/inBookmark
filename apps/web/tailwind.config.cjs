const shared = require('@repo/config/tailwind');
/**
 * Web-specific Tailwind config. Sets `content` for the Next app
 * and extends the shared config.
 */
module.exports = {
	...shared,
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx,html,css}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx,html}',
		'../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
	],
};
