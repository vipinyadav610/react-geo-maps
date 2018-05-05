
const path = require("path");
module.exports = {
  entry: "./src/components/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        options: {
          presets: ["react", "env", "stage-0"]
        }}
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: []
}


 // ,
  // // "devDependencies": {
  // //   "babel-core": "^6.26.3",
  // //   "babel-loader": "^7.1.4",
  // //   "babel-preset-env": "^1.6.1",
  // //   "babel-preset-react": "^6.24.1",
  // //   "babel-preset-stage-2": "^6.24.1",
  // //   "path": "^0.12.7",
  // //   "webpack": "^4.7.0",
  // //   "webpack-cli": "^2.1.2"
  // // }
