const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPulgin  = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: path.join(__dirname,'src/index.js')
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
             template: 'src/index.html'
         })
    ],
    mode:'development'
}