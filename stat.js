var firebaseConfig = {
    apiKey: "AIzaSyC6A-nYL43HYKhmDuoSKgd0lagDVSaehRg",
    authDomain: "football-results-94f61.firebaseapp.com",
    databaseURL: "https://football-results-94f61-default-rtdb.firebaseio.com",
    projectId: "football-results-94f61",
    storageBucket: "football-results-94f61.appspot.com",
    messagingSenderId: "324854839223",
    appId: "1:324854839223:web:bb830a5aa1ef5ed8255a32",
    measurementId: "G-BY6S33FWM1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
var userInputRef = firebase.database().ref('userInput');
  

function readResults(year){
    
    var results=firebase.database().ref(year);
    results.on('value', (data) => {
     var ranks = data.val(); 
     var finalranks=ranks.toString().split(',');
     document.getElementById("result1").innerHTML ="<br >  " +finalranks[1];    
})
}


function saveMessages(year) {
    var newuserInputsRef = userInputRef.push();
    newuserInputsRef.set({
        year:year})
    
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function submitForm(e) {
    
    e.preventDefault();
    var theYear = getInputVal("year");
    
    readResults(theYear);
    
}

document.getElementById('foorm').addEventListener('submit',submitForm);