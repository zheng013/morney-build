import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
console.log(document.documentElement.clientWidth);
if (document.documentElement.clientWidth > 500) {
  window.alert('请在手机中浏览，以保证页面效果');
  const img = document.createElement('img');
  img.src = '/morney-qrcode.png';
  img.style.position = 'fixed';
  img.style.left = '50%';
  img.style.top = '50%';
  img.style.transform = 'translate(-50%,-50%)';
  img.style.boxShadow = '0 0 8px rgba(0,0,0,0.3)';
  document.body.appendChild(img);
}
