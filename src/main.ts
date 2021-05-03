import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import FirebaseManager from './managers/firebase_manager';
import '@assets/css/index.css';

library.add(fas);

const firebaseManager = new FirebaseManager();
firebaseManager.initializeApp();

createApp(App)
  .component('FontAwesomeIcon', FontAwesomeIcon)
  .mount('#app');
