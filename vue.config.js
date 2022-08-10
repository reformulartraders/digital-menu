module.exports = {
  publicPath: '/digital-menu',
  outputDir: '../digital-menu-build',
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Take Lanches';
        return args;
      });
  },
}
