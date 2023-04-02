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
    }
})
