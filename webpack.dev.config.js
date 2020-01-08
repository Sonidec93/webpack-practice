const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/bart.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:''
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: ['file-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
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

    mode: 'development',
    devServer:{
        contentBase:path.resolve(__dirname,'dist/'),
        index:'index.html',
        port:9000
    },
    // devtool: 'inline-source-map',// by default in development mode it used source map that helps us in debugging
    resolve: {
        extensions: ['.js', '.ts']
    },
    plugins: [
        new TerserPlugin(),
        new CleanWebpackPlugin.CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                path.join(process.cwd(), 'build/**/*')

            ]
        }), //by default it cleans dist folder and dist subfolders but we can specify otherfolder as well
        new HtmlWebpackPlugin({
            title: 'Learning webpack',
            template: 'src/template.hbs',
            description: 'setting up webpack'
        })
    ]
} 