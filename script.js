var plusIcon = document.getElementById("plusicon");
var navUl = document.getElementById("afteropenid");
var xIconn = document.getElementById("xicon");

plusIcon.addEventListener("click", function () {
  navUl.classList.add("show");
  xIconn.style.display = "block";
  plusIcon.style.display = "none";
});

xIconn.addEventListener("click", function () {
  navUl.classList.remove("show");
  xIconn.style.display = "none";
  plusIcon.style.display = "block";
});