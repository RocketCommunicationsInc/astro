module.exports = function(eleventyConfig) {
  const markdownIt = require("markdown-it");
  const markdownItContainer = require("markdown-it-container");
  const implicitFigures = require("markdown-it-implicit-figures");
  const cleanCSS = require("clean-css");
  const fs = require("fs");

  fs.copyFile("404.md", "_content/404.md", err => {
    if (err) throw err;
  });

  // markdown options
  const options = {
    html: true,
    breaks: true,
    linkify: true
  };

  const markdownLib = markdownIt(options)
    .use(implicitFigures, {
      figcaption: true
    })
    .use(markdownItContainer, "note")
    .use(markdownItContainer, "caution")
    .use(markdownItContainer, "col")
    .use(markdownItContainer, "two-col")
    .use(markdownItContainer, "three-col");
  eleventyConfig.setLibrary("md", markdownLib);

  /* Removes the h1 element from components to enabled inserting live sample */
  eleventyConfig.addNunjucksFilter("removeHeader", function(value) {
    value.val = value.val.replace(/<h1>(.*)<\/h1>/, "");
    return value;
  });

  // Manually move static content
  eleventyConfig.addPassthroughCopy({ img: "img/_site" });
  eleventyConfig.addPassthroughCopy({ "_content/img": "img" });
  eleventyConfig.addPassthroughCopy({ "_content/img": "img" });
  eleventyConfig.addPassthroughCopy({ "_content/**/*/img/*": "components/img" });
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");

  //
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {
        const content_404 = fs.readFileSync("_site/404.html");

        bs.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  // You can return your Config object (optional).
  return {
    dir: {
      input: "_content",
      data: "./_data",
      includes: "../_includes"
    }
  };
};
