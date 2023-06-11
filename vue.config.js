module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: "@import '@/assets/breakpoints.scss';",
      },
    },
  },
  transpileDependencies: true,
};
