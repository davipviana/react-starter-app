const path = require("path");

const app = path.resolve();
const packageJson = app + "/package.json";
const reactScripts = app + "/node_modules/react-scripts";

module.exports = {
  app,
  packageJson,
  reactScripts,
  webpackConfig: reactScripts + "/config/webpack.config.js",
  jsconfig: app + "/jsconfig.json",
  tsconfig: app + "/tsconfig.json"
};