const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        'bart':'./src/bart.js',
        'homer':'./src/homer.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:''
    },
    optimization:{
        splitChunks:{
            chunks:"all",
            minSize:10000,
            automaticNameDelimiter:'_'

        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: ['file-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test:/\.hbs$/,
                use:'handlebars-loader'
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['transform-class-properties']
                    }
                }
            }
        ]
    },

    mode: 'production',
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin.CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                path.join(process.cwd(), 'build/**/*')
            ]
        }), //by default it cleans dist folder and dist subfolders but we can specify otherfolder as well
        new HtmlWebpackPlugin({
            title: 'Bart simpson',
            filename:'bart.html',
            chunks:['bart','vendors~bart~homer'],
            template: 'src/template.hbs',
            description: 'setting up webpack'
            
        }),
        new HtmlWebpackPlugin({
            title: 'Homer Simpson',
            filename:'homer.html',
            chunks:['homer','vendors~bart~homer'],
            template: 'src/template.hbs',
            description: 'setting up webpack'
        })
    ]
} 