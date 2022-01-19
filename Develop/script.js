
// sets current date and time
var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayDate);



// var schedule = document.getElementById("col-10 description")
// var saveBtn = document.getElementById("saveBtn col-1")

// saveBtn.addEventListener("click", function(event) {
//     event.preventDefault();

//     var comment = {
//         text: schedule.value(),
//     }

//     localStorage.setItem("comment", JSON.stringify(comment));
// });


// saveBtn.addEventListener("click", function(event) {
//     var textInput = {
//         text: schedule.value(),

//     var textInputstr = JSON.stringify(textInput);

//     localStorage.setItem("textInput", textInputstr)
//     }

// }

//Saves input text to local storage - when page refreshes, text is still saved

function saveText() {
    
    var inputText = document.querySelector("#textarea");
    var output = document.querySelector("#textarea");
    var saveButton = document.querySelector("#saveBtn");
  
    saveButton.addEventListener("click", updateOutput);
  
    output.textContent = localStorage.getItem("content");
    inputText.value = localStorage.getItem("content");
  
    function updateOutput() {
      localStorage.setItem("content", inputText.value);
  
      output.textContent = inputText.value;
    }
  }