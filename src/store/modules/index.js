/**
 * This file is responsible for grouping all store modules dynamically.
 * DON'T DELETE THIS!
 */
const filesToImport = import.meta.globEager('./*.js')
const modules = {}

const camelCase = (str) => {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => {
    return chr.toUpperCase()
  })
}

for (const path in filesToImport) {
  if (path !== './index.js') {
    const moduleName = camelCase(path.replace(/(\.\/|\.js)/g, ''))
    modules[moduleName] = {
      namespaced: true,
      ...filesToImport[path],
    }
  }
}
export default modules
