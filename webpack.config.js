module.exports = {
  // ... other config options ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        type: 'asset/resource',
        mimetype: 'text/css'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        type: 'asset/resource',
        mimetype: 'application/javascript'
      }
    ]
  }
};
