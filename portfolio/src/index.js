import {
  SphereGeometry,
  Mesh,
  MeshLambertMaterial,
  MeshPhongMaterial,
  BoxGeometry,
  TextGeometry,
  Raycaster,
  Vector2,
  Vector3,
  Frustum,
  Matrix4,
  FontLoader
} from "three";

import { setupRenderer, setupCannon } from "./setup";
import "./index.css";
import {
  Box,
  Body,
  Sphere,
  Material,
  Plane,
  ContactMaterial,
  Vec3
} from "cannon";

const mat2 = new Material();

const objectStack = [];
const { scene, camera, renderer } = setupRenderer();
const world = setupCannon();
const mouse = new Vector2();
const frustum = new Frustum();
const cameraViewProjectionMatrix = new Matrix4();
const target = new Vector2();
const windowHalf = new Vector2(window.innerWidth / 2, window.innerHeight / 2);

let fps, fpsInterval, startTime, now, then, elapsed;

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onMouseMove(event) {
  mouse.x = event.clientX - windowHalf.x;
  mouse.y = event.clientY - windowHalf.x;
}

function generateSphere(z, x, y, vx, vy, vz) {
  const geometry = new SphereGeometry(0.1, 0.5, 0.5);
  const material = new MeshLambertMaterial({ color: 0xff0000 });
  const sphere = new Mesh(geometry, material);
  sphere.geometry.computeVertexNormals();
  sphere.position.z = z;
  sphere.position.x = x;
  sphere.position.y = y;

  const body = new Body({
    mass: 1,
    type: Body.DYNAMIC,
    material: mat2
  });

  body.position.z = z;
  body.position.x = x;
  body.position.y = y;

  body.addShape(new Sphere(1));
  body.velocity.set(vx, vy, vz);

  scene.add(sphere);
  world.addBody(body);

  objectStack.push({
    sphere,
    body
  });
}

function updatePhysics() {
  camera.updateMatrixWorld(); // make sure the camera matrix is updated
  camera.matrixWorldInverse.getInverse(camera.matrixWorld);
  cameraViewProjectionMatrix.multiplyMatrices(
    camera.projectionMatrix,
    camera.matrixWorldInverse
  );
  frustum.setFromProjectionMatrix(cameraViewProjectionMatrix);

  world.step(1 / 60);
  for (let i = 0; i < objectStack.length; i++) {
    const { sphere, body } = objectStack[i];

    // clean up memory
    if (!frustum.intersectsObject(sphere)) {
      objectStack.splice(i, 1);
      sphere.geometry.dispose();
      sphere.material.dispose();
      scene.remove(sphere);
      world.remove(body);
    }

    sphere.position.copy(body.position);
    sphere.quaternion.copy(body.quaternion);
  }
}

function startAnimation(fps) {
  fpsInterval = 1000 / fps;
  then = window.performance.now();
  startTime = then;
  animate();
}

function animate(timeStamp) {
  // target.x = (1 - mouse.x) * 0.002;
  // target.y = (1 - mouse.y) * 0.002;

  // camera.rotation.x += 0.005 * (target.y - camera.rotation.x);
  // camera.rotation.y += 0.005 * (target.x - camera.rotation.y);

  requestAnimationFrame(animate);

  now = timeStamp;
  elapsed = now - then;

  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);

    // left to right
    generateSphere(
      -10,
      generateRandomNumber(-20, 10),
      generateRandomNumber(-10, 10),
      18,
      generateRandomNumber(-10, 10),
      1
    );

    // right to left
    generateSphere(
      -10,
      generateRandomNumber(-10, 20),
      generateRandomNumber(-10, 10),
      -18,
      generateRandomNumber(-10, 10),
      1
    );
  }

  updatePhysics();
  renderer.render(scene, camera);
}

window.addEventListener("mousemove", onMouseMove, false);

startAnimation(15);
