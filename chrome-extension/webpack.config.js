// This file is used to configure webpack to build the extension
const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "content.js",
        path: path.resolve(__dirname, "extension"),
    },
};
