const path = require('path');

module.exports = {
    entry: ['./src/index.js', './src/keyboard.js',  './src/layouts.js',],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/')
        }
    },
    mode: "production"
}