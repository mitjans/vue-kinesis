import { createApp } from 'vue';
import App from './App.vue';
import FirebaseManager from './components/firebase_manager';
import '@assets/css/index.css';

const firebaseManager = new FirebaseManager();
firebaseManager.initializeApp();

createApp(App)
  .mount('#app');
