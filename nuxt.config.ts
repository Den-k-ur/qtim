// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head: {
        title: 'qtim-test',
        htmlAttrs: {
          lang: 'en'
        },
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' },
          { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
      },
    },

    css: [
      '~/css/style.css',
      '~/css/woocommerce-layout.css',
      '~/css/woocommerce-smallscreen.css',
      '~/css/easy-responsive-shortcodes.css',
      '~/css/font-awesome.min.css'
    ],
    
  
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],
  
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
  

  
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      '@pinia/nuxt',
    ],
  
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }


  
})
