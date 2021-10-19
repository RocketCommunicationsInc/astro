#!/usr/bin/env node

const process = require("process");
const fs = require("fs");
const http = require("https");
const readline = require("readline");

let inSrc = false;
let inApp = false;
let inAssets = false;
let inEnv = false;

function writeFile(fileName) {
  console.log(`Creating ${fileName} ...`);
  let url;

  if (!inSrc) {
    url =
      "https://raw.githubusercontent.com/RocketCommunicationsInc/astro/main/packages/starter-kits/angular-starter/" +
      fileName;
  } else if (inSrc && !inApp && !inAssets && !inEnv) {
    url =
      "https://raw.githubusercontent.com/RocketCommunicationsInc/astro/main/packages/starter-kits/angular-starter/src/" +
      fileName;
  } else if (inSrc && inApp) {
    url =
      "https://raw.githubusercontent.com/RocketCommunicationsInc/astro/main/packages/starter-kits/angular-starter/src/app/" +
      fileName;
  } else if (inSrc && inAssets) {
    url =
      "https://raw.githubusercontent.com/RocketCommunicationsInc/astro/main/packages/starter-kits/angular-starter/src/assets/" +
      fileName;
  } else if (inSrc && inEnv) {
    url =
      "https://raw.githubusercontent.com/RocketCommunicationsInc/astro/main/packages/starter-kits/angular-starter/src/environments/" +
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
  console.log("***** Instializing Astro angular starter kit *****");

  changeDir(`./${appName}`);
  console.log(`Root directory ${appName} created!`);
  writeFile("package.json");
  writeFile(".browserslistrc");
  writeFile(".editorconfig");
  writeFile(".gitignore");
  writeFile("angular.json");
  writeFile("karma.conf.js");
  writeFile("README.md");
  writeFile("tsconfig.app.json");
  writeFile("tsconfig.json");
  writeFile("tsconfig.spec.json");

  //create src dir, or change into it if it exists
  changeDir("./src");
  inSrc = true;
  writeFile("favicon.ico");
  writeFile("index.html");
  writeFile("main.ts");
  writeFile("polyfills.ts");
  writeFile("styles.scss");
  writeFile("test.ts");

  console.log(`/src directory created in ${process.cwd()}`);

  //create public dir or change into it if already exists
  changeDir("./app");

  inApp = true;
  writeFile("app.component.html");
  writeFile("app.component.scss");
  writeFile("app.component.spec.ts");
  writeFile("app.component.ts");
  writeFile("app.module.ts");

  console.log(`./app directory created in ${process.cwd()}`);

  //create assets dir
  changeDir("../");
  inApp = false;
  changeDir("./assets");
  inAssets = true;
  writeFile(".gitkeep");
  console.log(`./assets directory created in ${process.cwd()}`);
  changeDir("../");
  inAssets = false;
  changeDir("./environments");
  inEnv = true;
  writeFile("environment.prod.ts");
  writeFile("environment.ts");
  console.log(`./environments directory created in ${process.cwd()}`);

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
