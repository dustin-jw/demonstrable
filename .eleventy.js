function sortByOrder(values) {
  const vals = [...values];
  return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/public': '/' });
  eleventyConfig.addLayoutAlias('default', 'layout.njk');

  eleventyConfig.addFilter('sortByOrder', sortByOrder);

  return {
    dir: {
      input: 'pages',
      output: 'dist',
      includes: '../src',
    },
    markdownTemplateEngine: 'njk',
  };
};
