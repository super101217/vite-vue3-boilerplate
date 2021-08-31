import App from '../App.vue'
export default {
  install: (app: typeof App) => {
    app.mixin({
      mounted() {},
    })
  },
}
