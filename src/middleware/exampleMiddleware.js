export default ({ $store, $router, env }) => {
  console.log($store.state.test.value)
  console.log(env)
  console.log($router)
}
