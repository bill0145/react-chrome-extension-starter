const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
      popup: "./src/popup.jsx"
    },
    resolve: {
      extensions: [".jsx", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.jsx$/, use:"babel-loader"    
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/popup.html",
        filename: "popup.html",
        inject: true,
        chunks: ["popup"]
      }),
      new CopyPlugin({
        patterns: [
          { from: "manifest.json", to: "." }
        ]
      })
    ],
    mode: "development"
  };