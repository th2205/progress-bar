const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  mode: "production",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js",
    library: {
      name: "progress",
      type: "umd",
      export: "default",
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_module/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"],
    extensions: [".ts"],
  },
};
