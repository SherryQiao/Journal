const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPulgin  = require('html-webpack-plugin');
const DotEnv = require('dotenv-webpack')
module.exports = {
    entry: {
        main: path.join(__dirname,'webApp/index.js')
    },
    output: {
        path: path.join(__dirname,"dist"),
        filename:"app.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [{
                    loader: 'babel-loader'
                }]
            },
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
        ]
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        // new CleanWebpackPlugin()
         new HtmlWebpackPulgin({
             template: 'webApp/index.html'
         }),
         new DotEnv()
    ],
    mode:'development'
}