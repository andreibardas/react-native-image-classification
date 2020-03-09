import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDaTUmBRBqqU-RK-laP_nmFuVG3YQQ8InE',
  authDomain: 'hotdog-ml.firebaseapp.com',
  databaseURL: 'https://hotdog-ml.firebaseio.com',
  projectId: 'hotdog-ml',
  storageBucket: 'hotdog-ml.appspot.com',
  messagingSenderId: '355695283211',
  appId: '1:355695283211:web:c0ee5b9a111d750da78b0e'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase;