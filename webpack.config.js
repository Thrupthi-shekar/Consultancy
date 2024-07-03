module.exports = {
  resolve: {
 fallback: {
  "buffer": false ,
  "buffer": require.resolve("buffer/"),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      timers: require.resolve('timers-browserify'),
      os: require.resolve('os-browserify/browser'),
      zlib: require.resolve('browserify-zlib'),
    },
  },
};

