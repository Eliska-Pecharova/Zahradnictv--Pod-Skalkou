// ARROW-DOWN
let slideDown = document.getElementById("slideDown");
slideDown.addEventListener("mouseover", function () {
  window.scrollTo({
    top: 900,
    behavior: "smooth",
  });
});
