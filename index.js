

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh48xuQkWB0SNWnO5KydemkcswA8JkZq0",
  authDomain: "ericamap-b8c24.firebaseapp.com",
  projectId: "ericamap-b8c24",
  storageBucket: "ericamap-b8c24.appspot.com",
  messagingSenderId: "123662793249",
  appId: "1:123662793249:web:e4f64fabb756380d57c160",
  measurementId: "G-RZKRXSBF2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


window.onload = function() {
  var image = document.querySelector('img[usemap]');
  var map = document.querySelector('map');
  var areas = map.querySelectorAll('area');

  // 이미지의 가로, 세로 비율을 계산합니다.
  var aspectRatio = image.naturalWidth / image.naturalHeight;

  // 이미지의 실제 가로, 세로 크기를 계산합니다.
  var realWidth = image.offsetWidth;
  var realHeight = realWidth / aspectRatio;

  // map 요소의 좌표를 조정합니다.
  for (var i = 0; i < areas.length; i++) {
    var coords = areas[i].getAttribute('coords').split(',');
    for (var j = 0; j < coords.length; j++) {
      if (j % 2 === 0) {
        coords[j] = (coords[j] / image.naturalWidth * realWidth).toFixed(0);
      } else {
        coords[j] = (coords[j] / image.naturalHeight * realHeight).toFixed(0);
      }
    }
    areas[i].setAttribute('coords', coords.join(','));
  }

  // resizeAreas 함수 호출
  resizeAreas(image, areas);
};

// resizeAreas 함수 정의
function resizeAreas(image, areas) {
  var aspectRatio = image.naturalWidth / image.naturalHeight;
  var realWidth = image.offsetWidth;
  var realHeight = realWidth / aspectRatio;

  for (var i = 0; i < areas.length; i++) {
    var coords = areas[i].getAttribute('coords').split(',');
    for (var j = 0; j < coords.length; j++) {
      if (j % 2 === 0) {
        coords[j] = (coords[j] / image.naturalWidth * realWidth).toFixed(0);
      } else {
        coords[j] = (coords[j] / image.naturalHeight * realHeight).toFixed(0);
      }
    }
    areas[i].setAttribute('coords', coords.join(','));
  }
}

// 윈도우 리사이즈 이벤트에 resizeAreas 함수 바인딩
window.addEventListener('resize', function() {
  var image = document.querySelector('img[usemap]');
  var map = document.querySelector('map');
  var areas = map.querySelectorAll('area');

  resizeAreas(image, areas);
});
