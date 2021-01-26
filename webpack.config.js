module.exports = {
    entry: [
        './src/index.js' 
    ],
    output: {
        path: __dirname + '/dist', 
        publicPath: '/',   
        filename: 'bundle.js' 
    },
    devServer: {
        contentBase: './dist' 
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/, 
            exclude: /node_modules/, 
            use: {loader:'babel-loader'}  
        },
        {
            test: /\.(js|jsx)$/, 
            exclude: /node_modules/, 
            use: ['eslint-loader']  
        },
        {test: /\.css$/,  
            use: [{loader: 'style-loader'},
                {loader: 'css-loader'}]  
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'] 
    }
}