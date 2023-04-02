// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
      '~/assets/css/main.css',
      '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },

    app: {
      head: {
    script: [`
          let wrappers = []

          window.onload = function(){
            wrappers = document.querySelectorAll('.wrapper');
          }

          window.addEventListener("mousemove", e => {
            wrappers.forEach(w => {
                const {left, top} = w.getBoundingClientRect();
                w.style = '--x:' + (e.pageX - left) + '; --y:' + (e.pageY - top) + ';';
              })
            })
          `]
      }
    },
    build: {
      transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/pro-solid-svg-icons",
      "@fortawesome/pro-regular-svg-icons",
      "@fortawesome/free-brands-svg-icons",
      ],
      },
})
