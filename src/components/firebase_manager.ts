import firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyD1vR_SrQ8j0AK1JRM8qsQHEwDF5rFHtng',
  authDomain: 'cmitjans-com.firebaseapp.com',
  projectId: 'cmitjans-com',
  storageBucket: 'cmitjans-com.appspot.com',
  messagingSenderId: '554773935767',
  appId: '1:554773935767:web:6a46e8979dac86420e5bd2',
  measurementId: 'G-0G9KHJRN4W',
};

export default class FirebaseManager {
  public initializeApp = () => {
    firebase.initializeApp(firebaseConfig);
  }
}
