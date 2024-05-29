import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css'; // Voeg deze regel toe

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // Specificeer de iconfont
  },
});
