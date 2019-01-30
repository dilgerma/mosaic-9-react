import Vue from 'vue'
import App from './App.vue'
import Ees from 'ees';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  
  methods: {
  },
  created: function () {
    // `this` points to the vm instance
    if(!window.ees) {
      window.ees = new Ees();
    }
  }
}).$mount('#catalog')
