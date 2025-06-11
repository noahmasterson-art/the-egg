module.exports = function (eleventyConfig) {
  // Copy static assets to output
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",           // your source folder
      includes: "_includes",// layout/partials folder
      output: "docs"        // GitHub Pages-ready folder
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk"
  };
};