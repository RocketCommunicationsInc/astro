#!/usr/bin/env node

const process = require("process");
const fs = require("fs");
const http = require("https");

let inSrc = false;
let inPublic = false;

function writeFile(fileName) {
  console.log(`Creating ${fileName} ...`);
  let url;
  if (!inSrc && !inPublic) {
    url =
      "https://raw.githubusercontent.com/RocketCommunicationsInc/astro/main/packages/starter-kits/react-starter/" +
      fileName;
  } else if (inSrc && !inPublic) {
    url =
      "https://raw.githubusercontent.com/RocketCommunicationsInc/astro/main/packages/starter-kits/react-starter/src/" +
      fileName;
  } else {
    url =
      "https://raw.githubusercontent.com/RocketCommunicationsInc/astro/main/packages/starter-kits/react-starter/public/" +
      fileName;
  }

  const file = fs.createWriteStream(`${fileName}`);
  const request = http.get(url, (res) => {
    res.on("error", (err) => {
      console.log(err);
      process.exit(1);
    });
    res.pipe(file);
  });
}

function changeDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    process.chdir(dir);
  } else {
    process.chdir(dir);
  }
  console.log(`Now working in ${process.cwd()}`);
}

function init() {
  console.log("***** Instializing Astro react starter kit *****");
  writeFile("package.json");
  writeFile("README.md");
  writeFile(".gitignore");

  //create src dir, or change into it if it exists
  changeDir("./src");
  inSrc = true;
  writeFile("App.css");
  writeFile("App.js");
  writeFile("App.test.js");
  writeFile("index.css");
  writeFile("index.js");
  writeFile("reportWebVitals.js");
  writeFile("setupTests.js");

  console.log(`/src directory created in ${process.cwd()}`);

  //create public dir or change into it if already exists
  changeDir("../");
  changeDir("./public");

  inPublic = true;
  writeFile("favicon.ico");
  writeFile("index.html");
  writeFile("logo512.png");
  writeFile("logo192.png");
  writeFile("manifest.json");
  writeFile("robots.txt");

  console.log(`./public directory created in ${process.cwd()}`);
  console.log(`Finished!`);
  console.log(`Please run: `);
  console.log(`npm install`);
  console.log(`npm start`);
  console.log(`Thanks for using AstroUXDS!`);
}

init();
