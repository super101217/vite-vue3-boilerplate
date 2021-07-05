export default {
  install: (app) => {
    app.mixin({
      mounted() {
        console.log('Hello from examplePlugin')
      },
    })
  },
}
