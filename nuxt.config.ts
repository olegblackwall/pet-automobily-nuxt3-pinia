export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    css: ['bootstrap/dist/css/bootstrap.min.css'],
    modules: ['@pinia/nuxt'],
    app: {
        baseURL: '/pet-automobily-nuxt3-pinia/',
        head: {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    }
})
