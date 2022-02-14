const PrincePdfPlugin = require("eleventy-plugin-prince-pdf");
const keystoneDocumentPlugin = require("eleventy-shortcode-keystone-document");
require("dotenv/config");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(PrincePdfPlugin, {
    pathsToRender: [{ htmlPath: "/pdf-content/", outputPath: "/pdf.pdf" }],
    serverPort: 3434,
  });

  eleventyConfig.addPlugin(keystoneDocumentPlugin);

  eleventyConfig.addCollection("pdfContentInOrder", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("pdfContent")
      .sort((a, b) => a.data.order - b.data.order);
  });

  eleventyConfig.addTemplateFormats("css");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
  };
};
