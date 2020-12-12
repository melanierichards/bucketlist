module.exports = function(eleventyConfig) {

  // Don't try to build asset files, just transparently copy them through
  eleventyConfig.addPassthroughCopy("assets");
  
};