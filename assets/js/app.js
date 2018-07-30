//firebase

var config = {
    apiKey: "AIzaSyC7n7QG81iC1lppPnSLG1wonU5GeUpMQls",
    authDomain: "train-schedule-9b40e.firebaseapp.com",
    databaseURL: "https://train-schedule-9b40e.firebaseio.com",
    projectId: "train-schedule-9b40e",
    storageBucket: "",
    messagingSenderId: "300417295759"
};

firebase.initializeApp(config);

var database = firebase.database();

//moment

setInterval(function(startTime) {
    $("#time").html(moment().format('YYYY-MM-DD dddd HH:mm:ss'));
}, 1000);

$("#train-entry-btn").on("click", function() {

// firebase

var train = $("#train-name-input").val().trim();
var destination = $("#destination-input").val().trim();
var firstTime = $("#first-train-input").val().trim();
var frequency = $("#frequency-input").val().trim();

var trainData = {

    name: train,
    destination: destination,
    firstTime: firstTime,
    frequency: frequency,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
};

database.ref().push(trainData);

console.log(trainData.name);
console.log(trainData.destination);
console.log(trainData.firstTime);
console.log(trainData.frequency);
console.log(trainData.dateAdded);

alert("Train added!");

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");

  // Determine when the next train arrives.
  return false;
});
// firebase

database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    console.log(childSnapshot.val());

    var tName = childSnapshot.val().name;
    var tDestination = childSnapshot.val().destination;
    var tFrequency = childSnapshot.val().firstTime;
    var tFirstTrain = childSnapshot.val().frequency;

    // train-example in-class

var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    console.log(firstTimeConverted);

var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime); //not working as expected- logging numerical value date

var tRemainder = diffTime % tFrequency;
    console.log("Remainder: " + tRemainder);

var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

$("#train-table > tbody").append("</td><td>" + train + "</td><td>" + destination + "</td><td>" +
frequency + "</td><td>" + nextTrain + "</td><td>" + tMinutesTillTrain + "</td></tr>");
},

function(errorObject) {
    console.log("Failed: " + errorObject.code);
});

$("#time").text(currentTime.format("YYYY-MM-DD dddd hh:mm"));