module.exports = {
  entry: "./app/app",

  output: {
    filename: "./dist/app.js"
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader" }
    ]
  }
};