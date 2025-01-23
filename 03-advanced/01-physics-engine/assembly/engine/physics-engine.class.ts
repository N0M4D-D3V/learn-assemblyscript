import { GRAVITY } from "./config";

class Object2D {
  x: f32;
  y: f32;
  width: f32;
  height: f32;
  velocityY: f32;

  constructor(x: f32, y: f32, width: f32, height: f32) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocityY = 0;
  }

  applyGravity(gravity: f32): void {
    this.velocityY += gravity;
    this.y += this.velocityY;
  }

  checkCollision(canvasHeight: f32): void {
    if (this.y + this.height >= canvasHeight) {
      this.y = canvasHeight - this.height;
      this.velocityY *= -0.8;
    }
  }
}

// Manejadores para instancias
export function createObject(
  x: f32,
  y: f32,
  width: f32,
  height: f32
): Object2D {
  return new Object2D(x, y, width, height);
}

export function updateObject(obj: Object2D, canvasHeight: f32): void {
  obj.applyGravity(GRAVITY);
  obj.checkCollision(canvasHeight);
}

// Getters para las propiedades (usados por JS)
export function getX(obj: Object2D): f32 {
  return obj.x;
}

export function getY(obj: Object2D): f32 {
  return obj.y;
}

export function getWidth(obj: Object2D): f32 {
  return obj.width;
}

export function getHeight(obj: Object2D): f32 {
  return obj.height;
}
