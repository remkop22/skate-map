module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [],
    },
  },

  devServer: {
    proxy: {
      "^/api": {
        target: "https://remoris-skate-map.herokuapp.com",
        changeOrigin: true,
      },
    },
  }
};
