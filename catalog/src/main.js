import Vue from 'vue'
import App from './App.vue'
import Eev from 'eev';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  methods: {
  },
  beforeCreate: function () {
    // `this` points to the vm instance
    if (!window.eev) {
      window.eev = new Eev();
    }

    window.eev.on('add-cart-item', function (item) {
      // eslint-disable-next-line
      console.log(JSON.stringify(item))
    });
  }

}).$mount('#catalog')
