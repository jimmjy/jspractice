const path = require('path');

module.exports = {
    entry: './src/input.js',
    output: {
        path: path.join(__dirname, 'public/scripts'),
        filename: 'bundle.js'
    }
}