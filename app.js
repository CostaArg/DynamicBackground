$(document).ready(function () {
    $("input").keyup(function () {
      let text = document.getElementById("input-box").value;
      $("body").css("background-color", text);
    });
  });