let inputDirection = { x: 0, y: 0 };
export let lastKey;
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastKey != e.key && lastKey != "ArrowDown") {
        inputDirection = { x: 0, y: -1 };
      }
      break;
    case "ArrowDown":
      if (lastKey != e.key && lastKey != "ArrowUp") {
        inputDirection = { x: 0, y: 1 };
      }
      break;
    case "ArrowLeft":
      if (lastKey != e.key && lastKey != "ArrowRight") {
        inputDirection = { x: -1, y: 0 };
      }
      break;
    case "ArrowRight":
      if (lastKey != e.key && lastKey != "ArrowLeft") {
        inputDirection = { x: 1, y: 0 };
      }
      break;
  }
  lastKey = e.key
});

export function getInputDirection() {
  return inputDirection;
}
