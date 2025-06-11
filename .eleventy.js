module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addCollection("pages", function (collectionApi) {
    return collectionApi.getFilteredByTag("pages").reverse();
  });

  return {
    templateFormats: ["html", "njk", "md"],
    htmlTemplateEngine: "njk",
  };
};