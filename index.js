const restartButton = document.getElementById("restartButton");
const startButton = document.getElementById("startButton");

restartButton.addEventListener("click", function () {
  location.reload();
});

startButton.addEventListener("click", function () {
  document.getElementById("myCanvas").dispatchEvent(
    new MouseEvent("click", {
      clientX: 200,
      clientY: 150,
      bubbles: true,
    })
  );

  let startButtonDiv = document.getElementById("startButton");
  let canvasDiv = document.getElementById("myCanvas");
  let startbuttonDiv = document.getElementById("startbuttonDiv");

  startButtonDiv.classList.add("hidden");
  canvasDiv.classList.remove("backgroundImage");
  startbuttonDiv.classList.add("hidden");
  Game.init();
});
