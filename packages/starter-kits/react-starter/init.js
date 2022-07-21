#!/usr/bin/env node

const process = require("process");
const fs = require("fs");
const http = require("https");
const readline = require("readline");

let inSrc = false;
let inPublic = false;

async function writeFile(fileName) {
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

  await fetchFile(url)
    .then((res) => {
      res.pipe(file);
    })
    .catch((err) => {
      throw new Error(err);
    });
}

async function fetchFile(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      if (res.statusCode === 200) {
        resolve(res);
      } else reject(`${res.statusCode} - Could not fetch file from ${url}`);
    });
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
  await writeFile("package.json");
  await writeFile("README.md");
  await writeFile(".gitignore");

  //create src dir, or change into it if it exists
  changeDir("./src");
  inSrc = true;
  await writeFile("App.css");
  await writeFile("App.js");
  await writeFile("App.test.js");
  await writeFile("index.css");
  await writeFile("index.js");
  await writeFile("reportWebVitals.js");
  await writeFile("setupTests.js");

  console.log(`/src directory created in ${process.cwd()}`);

  //create public dir or change into it if already exists
  changeDir("../");
  changeDir("./public");

  inPublic = true;
  await writeFile("favicon.ico");
  await writeFile("index.html");
  await writeFile("logo512.png");
  await writeFile("logo192.png");
  await writeFile("manifest.json");
  await writeFile("robots.txt");

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
