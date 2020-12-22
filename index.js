#!/usr/bin/env node
const project_creation = require("node_modules/hardhat/internal/cli/project-creation");

project_creation.createProject()
  .then(() => process.exit(process.exitCode))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
