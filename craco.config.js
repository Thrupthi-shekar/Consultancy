module.exports = function ({ env, paths }) {
  return {
    webpack: {
      configure: {
        resolve: {
          fallback: {
            util: require.resolve("util/"),
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
            timers: require.resolve("timers-browserify"),
            http: require.resolve("stream-http"),
            url: require.resolve("url/"),
            zlib: require.resolve("browserify-zlib"),
            os: require.resolve("os-browserify"),
            process: require.resolve("process/"),
            dns: require.resolve("dns-browserify"),
          },
        },
      },
    },
  };
};