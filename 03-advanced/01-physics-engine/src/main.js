import {
  createObject,
  updateObject,
  getX,
  getY,
  getWidth,
  getHeight,
} from "../build/release.js";

const addBtnEl = document.getElementById("add-btn");
addBtnEl.addEventListener("click", async () => {
  const canvas = document.getElementById("simulation");
  const ctx = canvas.getContext("2d");

  const objects = [];
  const canvasHeight = canvas.height;

  objects.push(createObject(100, 50, 50, 50));

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    objects.forEach((objPtr) => {
      updateObject(objPtr, canvasHeight);

      const x = getX(objPtr);
      const y = getY(objPtr);
      const width = getWidth(objPtr);
      const height = getHeight(objPtr);

      ctx.fillStyle = "#007BFF";
      ctx.fillRect(x, y, width, height);
    });

    requestAnimationFrame(render);
  }

  render();
});
