$(function () {
  $(".saveBtn").on("click", function() {
    // grabs what the user wrote and the time
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // save saves description and time in local storage
    localStorage.setItem(time, value);
  });
  // function sets past, present, future for time blocks
  function hourUpdate() {
    // gets current number of hours
    var currentTime = dayjs().hour();
    // loops over time blocks
    $(".time-block").each(function() {
      var timeHour = parseInt($(this).attr("id").split("-")[1]);
      // check if we've moved past this time
      if (timeHour < currentTime) {
        $(this).addClass("past");
      } 
      else if (timeHour === currentTime) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  // calling function here to update the class of time-block elements
  hourUpdate();
// function checks when the user visited the page and counts until the hour is up so that the page can refresh and the past, present, future time blocks move accordingly
  function getSecondsUntilNextHour() {
    let date = new Date();
    return (60 - date.getMinutes()) * 60;
  }
  setTimeout(reloadPage, getSecondsUntilNextHour() * 1000);
  function reloadPage() {
    document.location.reload();
  }
  // pulls information stored in local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  // displays the current date in the header of the page
  var today = dayjs().format('dddd, MMMM, DD');
  $("#currentDay").text(today);
});
