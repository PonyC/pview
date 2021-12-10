import pButton from './src/button.vue'

pButton.install = Vue => {
   Vue.component(pButton.name,pButton)
 }
 
export default pButton