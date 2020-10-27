module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .tap((opts) => ({ ...opts, emitWarning: true, failOnError: false }));
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/setup/_scss.scss";',
      },
    },
  },
};
