// Firebase 설정
// TODO: 여기에 본인의 Firebase 프로젝트 설정을 입력하세요
const firebaseConfig = {
    apiKey: "AIzaSyDKallHcHxGfsO8oCBRv9C9kfZZQyp_J3I",
    authDomain: "students-2b993.firebaseapp.com",
    projectId: "students-2b993",
    storageBucket: "students-2b993.firebasestorage.app",
    messagingSenderId: "833967230932",
    appId: "1:833967230932:web:4bcabd86258ceddace5041",
    measurementId: "G-J8W8XXJP9B"
};

// Firebase 초기화
if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Firebase 서비스 초기화
let auth, db;
if (typeof firebase !== 'undefined') {
    auth = firebase.auth();
    db = firebase.firestore();
}
