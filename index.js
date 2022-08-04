const restartButton = document.getElementById("restartButton");

window.onload = function () {
  const canvas = document.querySelector("canvas");
  canvas.focus();

  Game.init();
};

restartButton.addEventListener("click", function () {
  location.reload();
});

// altKey: false
// bubbles: true
// cancelBubble: false
// cancelable: true
// charCode: 0
// code: "ArrowDown"
// composed: true
// ctrlKey: false
// currentTarget: null
// defaultPrevented: false
// detail: 0
// eventPhase: 0
// isComposing: false
// key: "ArrowDown"
// keyCode: 40
// location: 0
// metaKey: false
// path: (5) [canvas#myCanvas, body, html, document, Window]
// repeat: false
// returnValue: true
// shiftKey: false
// sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
// srcElement: canvas#myCanvas
// target: canvas#myCanvas
// timeStamp: 954.3999999985099
// type: "keydown"
// view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// which: 40
