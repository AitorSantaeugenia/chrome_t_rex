const restartButton = document.getElementById("restartButton");

window.onload = function () {
  const canvas = document.querySelector("canvas");
  canvas.focus();
  Game.init();
};

restartButton.addEventListener("click", function () {
  location.reload();
});
