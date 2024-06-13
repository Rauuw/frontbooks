// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// module.exports = defineConfig({
//   devServer: {
//     port: 5000
//   }
// })

module.exports = {
  // No se generarán mapas de origen para archivos de producción para reducir el tamaño
  productionSourceMap: false,

  // Configuración de Webpack para producción
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // Modo producción
      config.optimization.splitChunks = {
        chunks: 'all',
      };
      config.optimization.runtimeChunk = 'single';
    }
  },

  // Configuración del servidor de desarrollo en vue-cli-service
  devServer: {
    port: 5000,  // El puerto en el que quieres que funcione tu servidor de desarrollo
    open: true,  // Abre el navegador automáticamente
  }
};

