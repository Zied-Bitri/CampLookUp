const path = require("path");
const source = path.resolve(__dirname, 'src');
module.exports = {
    entry: "./src/index",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test: '/\.(js$|jsx)/',
            exclude: /node_modules/
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
}
