module.exports = {
  entry: {
    b: "./app/main"
  },

  output: {
    filename: "./dist/app.js"
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader" }
    ]
  }
};