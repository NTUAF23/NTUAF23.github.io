import Vue from 'vue';
import 'sanitize.css';

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

import App from './App';
import router from './router';

Vue.use(MuseUI);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
