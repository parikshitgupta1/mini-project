var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyA-zYxZFqH8oyv7LLDQlScBcdR58lknY2w",
    authDomain: "face-mask-detection-mp.firebaseapp.com",
    projectId: "face-mask-detection-mp",
    storageBucket: "face-mask-detection-mp.appspot.com",
    messagingSenderId: "390188292522",
    appId: "1:390188292522:web:fc95eaf0fe026c7fa833d3"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


