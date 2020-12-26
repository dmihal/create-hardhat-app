#!/usr/bin/env node
const project_creation = require("hardhat/internal/cli/project-creation");
const fs = require('fs');

if (process.argv.length <= 2) {
  console.error('Error: must pass project directory name:');
  console.log('    yarn create hardhat-app <project-name>\n');
  process.exit(1);
}

const dir = process.cwd() + '/' + process.argv[2];
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}
process.chdir(dir);

fs.writeFileSync('yarn.lock', '');

project_creation.createProject()
  .then(() => process.exit(process.exitCode))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
