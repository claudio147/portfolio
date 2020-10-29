module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .tap((opts) => ({ ...opts, emitWarning: true, failOnError: false }));
  },
  configureWebpack: {
    output: {
      filename: '[name].[hash].js',
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/setup/_scss.scss";',
      },
    },
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
