const path = require('path');
const DotEnv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    resolve: {
        plugins: [new TsconfigPathsPlugin({})],
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    devServer: {
        inline: true,
        port: 3030
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            },
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        // options: {
                        //     ident: 'postcss',
                        // }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new DotEnv(),
        new HtmlWebpackPlugin({
            template: __dirname + '/public/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};