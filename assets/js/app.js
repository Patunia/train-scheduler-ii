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
    $("#time").html(moment().format('YYYY-MM-DD dddd HH:mm:ss'))
  }, 1000);

  $("#train-entry").on("click", function() {
    event.preventDefault();
});

// train-example
    var tFrequency = 3;
    var firstTime = "00:00";

    // First Time (pushed back 1 year to make sure it comes before current time)
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