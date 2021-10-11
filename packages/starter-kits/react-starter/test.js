const commander = require("commander");
const fs = require("fs");
const os = require("os");
const path = require("path");

const packageJson = require("./package.json");

let projectName;

function init() {
  const program = new commander.Command(packageJson.name)
    .version(packageJson.version)
    .arguments("<project-directory>")
    .action((name) => projectName.name);

  buildRepo(projectName);
}

function buildRepo(name) {
  const root = path.resolve(name);
  const appName = path.basename(root);

  console.log(`Creating a new dir: ${root}`);

  const packageJson = {
    name: appName,
    version: "0.0.0",
  };
  fs.writeFileSync(
    path.join(root, "package.json"),
    JSON.stringify(packageJson, null, 2) + os.EOL
  );

  // const ogDir = process.cwd()
  // process.chdir(root);
}

// buildRepo()
init();
