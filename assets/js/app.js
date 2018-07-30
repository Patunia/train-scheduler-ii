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

$("#train-entry").on("click", function() {
    event.preventDefault();
});

// firebase

var train = $("#input-train-name").val().trim();
var destination = $("#input-destination").val().trim();
var firstTime = $("#input-first-train-time").val().trim();
var frequency = $("#input-frequency").val().trim();

var trainData = {
    formtrain: train,
    formdestination: destination,
    formfirsttime: firstTime,
    formfrequency: frequency,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
    };

database.ref().push(trainData);

console.log(trainData.formtrain);
console.log(trainData.formdestination);
console.log(trainData.formfirsttime);
console.log(trainData.formfrequency);
console.log(trainData.dateAdded);

alert("Train added!");

// database.ref().on("child_added", function(childSnapshot, prevChildKey) {
//     var train = childSnapshot.val().formtrain;
//     var destination = childSnapshot.val().formdestination;
//     var frequency = childSnapshot.val().formfrequency;
//     var firstTime = childSnapshot.val().formfirsttime;

// train-example in-class
var tFrequency = 3;

var firstTime = "00:00";

var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

$("#time").text(currentTime.format("YYYY-MM-DD dddd HH:mm"));