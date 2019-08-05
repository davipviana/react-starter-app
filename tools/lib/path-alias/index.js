const path = require("path");

module.exports.getPathAliases = (applicationPath, configPath) => {
    const config = require(configPath);
    const compilerOptions = config.compilerOptions || {};
    const { baseUrl, paths } = compilerOptions;
    const aliases = {};

    for (let aliasName in paths) {
        const aliasPaths = paths[aliasName];
        const aliasPath = path.extname(aliasPaths[0]).length
        ? aliasPaths[0]
        : aliasPaths[0].endsWith("/*") || aliasPaths[0].endsWith("/")
        ? path.dirname(aliasPaths[0])
        : aliasPaths[0];

        const normalizedAliasName = aliasName.replace("/*", "");

        aliases[normalizedAliasName] = path.join(
            applicationPath,
            baseUrl,
            aliasPath
        );
    }

    return aliases;
}