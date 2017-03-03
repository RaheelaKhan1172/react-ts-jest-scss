const { resolve } = require("path");
const webpack = require("webpack");
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    "./main.tsx",  
  ],
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist"),
  },  
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  context: resolve(__dirname, "src"),
 /* devServer: {
    hot: true,
    contentBase: resolve(__dirname,"dist"),
    publicPath:"/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],*/
  devtool: "source-map",
  module: {
        rules:[
/*            {
              enforce:"pre",
              test:/\.tsx?$/,
              use:"source-map-loader",
              exclude: "/node_modules/"
            }, */
            {
              test: /\.tsx?$/,
              use: [
               { loader: "atomic-loader"},
               { loader: "babel-loader" },
               { loader:  "awesome-typescript-loader" }
              ],
              include: resolve(__dirname, "src")
            },
            {
              test: /\.scss$/, loaders:["style-loader","css-loader","sass-loader"]
            },
            {
              enforce:"pre",
              test:/\.js$/,
              use:"source-map-loader",
              exclude:"/node_modules/"
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
/*            { 
              enforce:"pre",
              test: /\.js$/,
              loader: "source-map-loader",
              exclude:"/node_modules/"
             },*/

            {
              test: /\.html/,
              use: [
                { loader: "atomic-loader" },
                { loader: "babel-loader" }
              ]
            },
        ]
    }, 
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },

};
