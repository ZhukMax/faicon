var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: {
                    loader: "css-loader"
                }
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: "url-loader?name=[path][name].[hash:6].[ext]&limit=1"
                }
            },
            {
                test: /\.(png|jpg|svg|gif|ico)$/,
                use: {
                    loader: "url-loader?name=[path][name].[hash:6].[ext]&limit=4096"
                }
            }
        ]
    },
    externals: {
        'react': 'commonjs react'
    }
};
