"use strict";

const { resolve } = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          {
            from: "public/css",
          },
        ],
      }),
    ],
    resolve: {
      extensions: [".ts", ".vue", ".scss"],
      alias: {
        "@": resolve(__dirname, "src"),
        font: resolve(__dirname, "public/font"),
        emoji: resolve(__dirname, "public/emoji"),
      },
    },
  },
};
