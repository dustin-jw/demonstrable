const pluginWebc = require('@11ty/eleventy-plugin-webc');
const { EleventyRenderPlugin } = require('@11ty/eleventy');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/public': '/' });
  eleventyConfig.addLayoutAlias('default', 'layout.njk');

  eleventyConfig.addPlugin(pluginWebc, {
    components: 'src/components/**/*.webc',
  });
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  return {
    dir: {
      input: 'pages',
      output: 'dist',
      includes: '../src',
    },
    markdownTemplateEngine: 'njk',
  };
};
