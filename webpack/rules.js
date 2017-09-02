module.exports = [
  {
    test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
    loader: 'url-loader?limit=100000',
  },
];
