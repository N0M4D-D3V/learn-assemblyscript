import { calcFreeFall, calcAcceleration } from "../build/release.js";
import { DEFAULT_INPUT, BALL_COLOR, ERRORS } from "./config.js";

const canvas = document.getElementById("dynamicCanvas");
const ctx = canvas.getContext("2d");

// Dimensiones del canvas
const width = canvas.width;
const height = canvas.height;

// Crear un nuevo estado inicial del punto
function createPointState() {
  return {
    x: width / 2,
    y: 0,
    t: 0,
  };
}

// Inicializar los inputs con valores por defecto
document.getElementById("y0").value = DEFAULT_INPUT.y0;
document.getElementById("v0").value = DEFAULT_INPUT.v0;
document.getElementById("g").value = DEFAULT_INPUT.g;

// Variable global para el ID de la animación
let animationFrame = null;

// Función para iniciar una nueva animación
function startAnimation() {
  let point = createPointState();
  let lastTime = 0;

  const input = {
    y0: parseFloat(document.getElementById("y0").value),
    v0: parseFloat(document.getElementById("v0").value),
    g: parseFloat(document.getElementById("g").value),
  };

  if (isNaN(input.y0) || isNaN(input.v0) || isNaN(input.g)) {
    alert(ERRORS.INVALID_IN);
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
    return;
  }

  // Animación
  function animate(timestamp) {
    const deltaTime = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    // Incrementar el tiempo
    point.t += deltaTime;
    const acceleration = calcAcceleration(input.g, point.t);
    const newY = calcFreeFall(input.y0, input.v0, acceleration, point.t);

    // Escalar posición al canvas
    point.y = height - newY * (height / input.y0);

    // Detenerse en el fondo del canvas
    if (point.y >= height) {
      point.y = height;
    }

    // Dibujar el punto en el canvas
    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = BALL_COLOR;
    ctx.fill();
    ctx.closePath();

    // Continuar la animación si no ha llegado al fondo
    if (point.y < height) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      console.log("<!> FREEFAL SIMULATION FINISHED <!>");
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
  }

  // Iniciar la animación and Sincronizar el tiempo inicial
  console.log(`<!> RUNNING FREEFALL SIMULATION <!>
    y0: ${input.y0} | v0: ${input.v0} | g: ${input.g}`);

  lastTime = performance.now();
  animationFrame = requestAnimationFrame(animate);
}

// Manejo del botón
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", () => {
  // Cancelar cualquier animación previa
  if (animationFrame !== null) {
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
  }

  // Limpiar el canvas
  ctx.clearRect(0, 0, width, height);

  // Iniciar una nueva animación
  startAnimation();
});
