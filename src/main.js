import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.filter('cpf', function(valor) {
  if (valor.length === 11) {
    const arr = valor.split('');
    arr.splice(3, 0, '.');
    arr.splice(7, 0, '.');
    arr.splice(11, 0, '-')
    return arr.join('')
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
