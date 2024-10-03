function updatePosition(boxId, positionValue) {
  const box = document.getElementById(boxId);
  box.style.position = positionValue;

  // Reset any other position-specific styles
  box.style.top = "0";
  box.style.left = "";
  box.style.right = "";
  box.style.bottom = "";

  // Sticky needs a top value to work properly, so we handle that
  if (positionValue === "sticky") {
    box.style.top = "0";
  }
}
