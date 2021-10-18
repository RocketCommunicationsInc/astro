#!/usr/bin/env node

const process = require("process");
const fs = require("fs");
const http = require("https");
const readline = require("readline");

let inSrc = false;
let inAssets = false;

function writeFile(fileName) {
  console.log(`Creating ${fileName} ...`);
  let url;
  if (!inSrc && !inAssets) {
    url =
      "https://raw.githubusercontent.com/RocketCommunicationsInc/astro/main/packages/starter-kits/vue3-starter/" +
      fileName;
  } else if (inSrc && !inAssets) {
    url =
      "https://raw.githubusercontent.com/RocketCommunicationsInc/astro/main/packages/starter-kits/vue3-starter/src/" +
      fileName;
  } else {
    url =
      "https://raw.githubusercontent.com/RocketCommunicationsInc/astro/main/packages/starter-kits/vue3-starter/src/assets" +
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
  console.log("***** Instializing Astro Vue 3 starter kit *****");

  changeDir(`./${appName}`);
  console.log(`Root directory ${appName} created!`);
  writeFile("package.json");
  writeFile("vite.config.js");
  writeFile("index.html");
  //   writeFile("README.md");
  //   writeFile(".gitignore");

  //create src dir, or change into it if it exists
  changeDir("./src");
  inSrc = true;
  writeFile("App.vue");
  writeFile("main.js");
  console.log(`/src directory created in ${process.cwd()}`);

  //assets folder
  changeDir("./assets");
  inAssets = true;
  writeFile("logo.png");
  console.log(`/assets directory created in ${process.cwd()}`);

  console.log(`Finished!`);
  console.log(`******************`);
  console.log(`Please run: `);
  console.log(`cd ${appName}`);
  console.log(`npm install`);
  console.log(`npm run dev`);
  console.log(`Thanks for using AstroUXDS!`);
  console.log(`******************`);
}

init();
