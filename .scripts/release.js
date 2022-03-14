const { exec } = require("child_process");
const process = require("process");

function getBranchName() {
  let cmd = "";
  exec("git rev-parse --abbrev-ref HEAD", (err, stdout, stderr) => {
    if (err) {
      console.error("Error getting current branch: ", err);
      process.exit(1);
    }
    if (typeof stdout === "string" && stdout.trim() === "next") {
      cmd = "beta";
    }

    if (typeof stdout === "string" && stdout.trim() === "main") {
      cmd = "storybook";
    }
  });
  if (cmd) exec(`lerna run deploy.${cmd} --prod`);
  else {
    console.error(
      "Branch is not main or next - switch to the correct branch and try again."
    );
    process.exit(1);
  }
}

getBranchName();
