$(".saveBtn").on("click", function () {
  var timeSlotActivity = $(this).siblings(".description").val();
  console.log(timeSlotActivity);
  var timeSlotId = $(this).parent().attr("id");
  console.log(timeSlotId);

  localStorage.setItem(timeSlotId, timeSlotActivity);
});
//Saves input text to local storage - when page refreshes, text is still saved
function saveText() {
  var inputText = document.querySelector("#textarea");
  var output = document.querySelector("#textarea");
  var saveButton = document.querySelector("#saveBtn");

  saveButton.addEventListener("click", updateOutput);

  output.textContent = localStorage.getItem("content");
  // inputText.value = localStorage.getItem("content");

  function updateOutput() {
    localStorage.setItem("content", inputText.value);

    output.textcontent = localstorage.getitem("content");

    //   output.textContent = inputText.value;
  }
}

//set current day and time at top of screen
var currentDate = moment().format("dddd MMM Do YYYY, h:mm a ");
$("#currentDay").append(currentDate);

// function for changing colour according to past, present and future
function currentTime() {
  var currentHour = moment().hours();
  console.log("Current Hour", currentHour);
  $(".time-block").each(function () {
    console.log(this);
    var plannerTime = parseInt($(this).attr("id"));

    if (plannerTime < currentHour) {
      $(this).addClass("past");
    } else if (plannerTime === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

var timeCheckInterval = setInterval(currentTime, 20000);

currentTime();


$('#8 .description').val(localStorage.getItem('8'));
$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));
$('#11 .description').val(localStorage.getItem('11'));
$('#12 .description').val(localStorage.getItem('12'));
$('#13 .description').val(localStorage.getItem('13'));
$('#14 .description').val(localStorage.getItem('14'));
$('#15 .description').val(localStorage.getItem('15'));
