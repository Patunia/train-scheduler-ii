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

//firebase

    var currentTime = moment();
    console.log("current time " + moment(currentTime).format("YYYY-MM-DD dddd HH:mm:ss));

    $("#time").text(currentTime.format("YYYY-MM-DD dddd HH:mm:ss"));
