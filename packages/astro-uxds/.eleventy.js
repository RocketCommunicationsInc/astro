module.exports = function (eleventyConfig) {
  const markdownIt = require("markdown-it");
  const markdownItContainer = require("markdown-it-container");
  const markdownItAnchor = require("markdown-it-anchor");
  const implicitFigures = require("markdown-it-implicit-figures");
  const markdownItFigure = require("./js/markdown-figure-it.js");
  const fs = require("fs");

  // console.log(markdownIt.escapeHtml);

  fs.copyFile("404.md", "_content/404.md", (err) => {
    if (err) throw err;
  });

  // markdown options
  const options = {
    html: true,
    breaks: true,
    linkify: true,
  };

  const markdownLib = markdownIt(options)
    .use(markdownItAnchor, {})
    .use(implicitFigures, {
      figcaption: true,
    })
    .use(markdownItFigure, {})
    .use(markdownItContainer, "note")
    .use(markdownItContainer, "caution")
    .use(markdownItContainer, "col")
    .use(markdownItContainer, "two-col")
    .use(markdownItContainer, "three-col");

  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addNunjucksFilter("markdownify", (markdownString) =>
    markdownLib.renderInline(markdownString)
  );

  /* Removes the h1 element from components to enabled inserting live sample */
  eleventyConfig.addNunjucksFilter("removeHeader", function (value) {
    const regex = /<\s*h1[^>]*>(.*?)<\s*\/\s*h1>/g;
    value.val = value.val.replace(regex, "");
    return value;
  });

  /* Adds an do/dont styling to all do/dont images */
  eleventyConfig.addNunjucksFilter("doDont", function (value) {
    const regex = /<figcaption>(Don['|’]t): /;

    const els = value.val
      .split("\n")
      .map((el) =>
        el.includes("<figcaption>Do: ")
          ? el.replace("<figcaption>Do: ", "<figcaption class='do'><b>Do</b>: ")
          : regex.test(el)
          ? el.replace(regex, "<figcaption class='dont'><b>Don’t</b>: ")
          : el
      );

    value.val = els.join("\n");
    return value;
  });

  // Manually move static content
  eleventyConfig.addPassthroughCopy({ img: "img/_site" });
  eleventyConfig.addPassthroughCopy({ "_content/img": "img" });
  eleventyConfig.addPassthroughCopy({
    "_content/**/*/img/*": "components/img",
  });
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("fonts");

  //
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        const content_404 = fs.readFileSync("_site/404.html");

        bs.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  function savePasswordHeaders() {
    var passwordHeaderFileContent = `
/*
      Basic-Auth: ${process.env.COMPLIANCE_LOGIN}:${process.env.COMPLIANCE_PASSWORD}
`;
    var headersPath = "_site/_headers";
    fs.writeFile(headersPath, passwordHeaderFileContent, (err) => {
      if (err) throw err;
      console.log("Passwords set for this environment!");
    });
  }
  // only make password headers on netlify's compliance context
  if (process.env.NETLIFY && process.env.BRANCH === "compliance-dev") {
    savePasswordHeaders();
  }
  //console.log(process.env.NETLIFY, process.env.BRANCH, process.env.CONTEXT);

  // You can return your Config object (optional).
  return {
    dir: {
      input: "_content",
      data: "./_data",
      includes: "../_includes",
    },
  };
};
