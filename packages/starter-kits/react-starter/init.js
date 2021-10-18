#!/usr/bin/env node

const process = require("process");
const fs = require("fs");
const http = require("https");
const readline = require("readline");

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

function getAppName(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    })
  );
}

async function init() {
  let appName = process.argv[2];
  if (!appName) {
    appName = await getAppName("Please enter a root directory name: ");
  }
  console.log("***** Instializing Astro React starter kit *****");

  changeDir(`./${appName}`);
  console.log(`Root directory ${appName} created!`);
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
  console.log(`******************`);
  console.log(`Please run: `);
  console.log(`cd ${appName}`);
  console.log(`npm install`);
  console.log(`npm start`);
  console.log(`Thanks for using AstroUXDS!`);
  console.log(`******************`);
}

init();
