const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = defineConfig({
  devServer: {
    port: 5000
  }
})
