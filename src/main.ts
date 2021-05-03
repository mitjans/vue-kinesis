import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import FirebaseManager from './managers/firebase_manager';
import '@assets/css/index.css';

library.add(fas);
library.add(fab);
library.add(far);

const firebaseManager = new FirebaseManager();
firebaseManager.initializeApp();

createApp(App)
  .component('FontAwesome', FontAwesomeIcon)
  .mount('#app');
