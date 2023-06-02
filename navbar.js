document.addEventListener("DOMContentLoaded", function() {
  var menuBtn = document.getElementById("menuBtn");
  var menuContent = document.getElementById("menuContent");

  menuBtn.addEventListener("click", function() {
    if (menuContent.style.display === "block") {
      menuContent.style.display = "none";
      menuContent.style.opacity = 0;
    } else {
      menuContent.style.display = "block";
      menuContent.style.opacity = 1;
    }
  });
});