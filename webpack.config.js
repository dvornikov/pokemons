const autoprefixer = require('autoprefixer');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [{
            oneOf: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader']
                },
                {
                    test: /\.less$/,
    
                    use: [{
                        loader: require.resolve('style-loader')
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    flexbox: true,
                                }),
                            ],
                        },
                    }, {
                        loader: "less-loader"
                    }]
                },
                {
                    test: /\.css$/,
                    use: [{
                        loader: require.resolve('style-loader')
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: require.resolve('postcss-loader'),
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    flexbox: true,
                                }),
                            ],
                        },
                    }]
                },
                {
                    loader: require.resolve('file-loader'),
                    // Exclude `js` files to keep "css" loader working as it injects
                    // it's runtime that would otherwise processed through "file" loader.
                    // Also exclude `html` and `json` extensions so they get processed
                    // by webpacks internal loaders.
                    exclude: [/\.js$/, /\.html$/, /\.json$/],
                    options: {
                      name: 'static/media/[name].[hash:8].[ext]',
                    },
                  }
            ]
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
};