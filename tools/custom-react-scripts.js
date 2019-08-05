#!/usr/bin/env node
'use strict';

const paths = require("./lib/paths");
const pathAlias = require("./lib/path-alias");

const envs = {
    start: process.env.NODE_ENV || "development",
    test: process.env.NODE_ENV || "test",
    build: "production"
};

const main = (scriptName) => {
    const aliases = pathAlias.getPathAliases(paths.app, paths.jsconfig);

    process.env.NODE_ENV = envs[scriptName];
    const WPConfig = require(paths.webpackConfig);
    require.cache[require.resolve(paths.webpackConfig)].exports = env => {
        const defaultWPConfig = WPConfig(env);

        return {
            ...defaultWPConfig,
            resolve: {
                ...defaultWPConfig.resolve,
                alias: {
                    ...defaultWPConfig.resolve.alias,
                    ...aliases
                }
            }
        };
    };

    require(`${paths.app}/node_modules/react-scripts/scripts/${scriptName}`);
}

const scriptName = process.argv[2];
main(scriptName);