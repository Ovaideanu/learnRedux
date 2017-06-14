module.exports = {
  entry: "./src/main.js",
  output: {
    path: "src",
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    contentBase: './src',
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        query: {
            presets: ["react", "es2015", "stage-2"]
        }
      }
    ]
  }
}
