import { createApp } from 'vue';
import App from './App.vue';
import FirebaseManager from './components/firebase_manager';

const firebaseManager = new FirebaseManager();
firebaseManager.initializeApp();

createApp(App)
  .mount('#app');
