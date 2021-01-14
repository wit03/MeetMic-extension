window.addEventListener("load", function () {
  firebase.initializeApp({
    apiKey: "AIzaSyBRsko4K3jHwgFGfticAj1y6UmYO7du-kc",
    authDomain: "meetmic-e6487.firebaseapp.com",
    projectId: "meetmic-e6487",
    storageBucket: "meetmic-e6487.appspot.com",
    messagingSenderId: "569391082173",
    appId: "1:569391082173:web:cbe0b3af541f9f83b9e5d4",
    measurementId: "G-RB5SRTZG0B",
  });
  var db = firebase.firestore();
  const checkElement = async (selector) => {
    while (document.querySelector(selector) === null) {
      await new Promise((resolve) => requestAnimationFrame(resolve));
    }
    return document.querySelector(selector);
  };
  checkElement('[jscontroller="X2AfEb"]').then((selector) => {
    setTimeout(function () {
      var addNew = "<h3>Type mobile ID</h3>";
      addNew += '<input type="text" id="key-id"/>';
      addNew += '<button id="connect-key">Connect</button>';
      selector.innerHTML = addNew;

      document
        .getElementById("connect-key")
        .addEventListener("click", myFunction);
      function myFunction() {
        //One-time connection verified
        db.collection("user")
          .doc(document.getElementById("key-id").value)
          .get()
          .then((doc) => {
            if (doc.exists) {
              alert("MeetMic is connected");
            }
          });
        //Get DB snapshot
        db.collection("user")
          .doc(document.getElementById("key-id").value)
          .onSnapshot((doc) => {
            if (doc.data().check) {
              checkElement('[jscontroller="lCGUBd"]').then((selector) => {
                setTimeout(function () {
                  selector.click();
                  document
                    .querySelector('[jscontroller="lCGUBd"]')
                    .setAttribute("data-is-muted", "true");
                }, 1000);
              });
            } else if (!doc.data().check) {
              checkElement('[jscontroller="lCGUBd"]').then((selector) => {
                setTimeout(function () {
                  selector.click();
                  document
                    .querySelector('[jscontroller="lCGUBd"]')
                    .setAttribute("data-is-muted", "false");
                }, 1000);
              });
            }
          });
      }
    }, 2000);
  });
});
