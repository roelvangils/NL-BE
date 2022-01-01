const slugify = require("slugify");

module.exports = function(eleventyConfig) {

	eleventyConfig.addPassthroughCopy('./src/css');

	// Universal slug filter strips unsafe chars from URLs
	eleventyConfig.addFilter("slugify", function (str) {
		return slugify(str.replace(/<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g, ""), {
			lower: true,
			replacement: "-",
			remove: /[*+~.·,()'"`´%!?¿:@»]/g,
		});
	});

	// Return your Object options:
	return {
		"passthroughFileCopy": true,
		"dir": {
			"input": "src",
			"includes": "_includes",
			"data": "_data",
			"output": "docs",
		},
	}
};

