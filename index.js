import Main from './src/components/Main'
import Button from './src/components/Button/Button'
import Vue from 'vue'

const components = {
  Main,
  Button
}
Object.keys(components).forEach(name => {
  Vue.component(name, components[name])
})
export default components
