import Vue from 'vue'
import App from './App.vue'
import './common/stylus/index.styl'

var FastClick = require('fastclick');
FastClick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');