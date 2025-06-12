module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",              // Source files live here
      includes: "_includes",   // Nunjucks partials/layouts
      output: "_site"          // Final output folder
    },
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk"
  };
};