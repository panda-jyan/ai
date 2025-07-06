let biggerChanged = false;
let changeImageChanged = false;
let buttonFontSize = 16;

function makeBigger() {
  const img = document.getElementById("myImage");
  const currentWidth = parseInt(img.style.width) || img.width;
  img.style.width = (currentWidth + 50) + "px";

  const changeButton = document.getElementById("changeBtn");
  buttonFontSize += 2;
  changeButton.style.fontSize = buttonFontSize + "px";

  if (!biggerChanged) {
    img.src = "solly.gif";
    biggerChanged = true;
  }
}

function changeImage() {
  if (!changeImageChanged) {
    const img = document.getElementById("myImage");
    img.src = "heyyy.webp";
    changeImageChanged = true;
  }
}
