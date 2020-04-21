const body = document.querySelector("body");
const img = document.querySelector("img");

body.addEventListener("mousemove", (e) => {
  // el.style.backgroundPositionX = -e.offsetX + "px";
  img.style.PositionX = -e.offsetY + "px";
});
