module.exports = {
    resolve: {
      fallback: {
        "util": require.resolve("util/"),
        // Add other fallbacks as needed, like "path" or "stream"
      },
    },
  };
  