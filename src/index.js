import {
  SphereGeometry,
  Frustum,
  Matrix4,
  BoxGeometry,
  LineBasicMaterial,
  BufferGeometry,
  Line
} from "three";
import { Vec3 } from "cannon";
import { TimelineMax } from "gsap";

import { setupRenderer, setupCannon } from "./setup";
import { generateSphere } from "./sphere";
import { setupObserver } from "./observer";
import "./index.css";

const objectStack = [];
const { scene, camera, renderer } = setupRenderer();
const world = setupCannon();
const frustum = new Frustum();
const cameraViewProjectionMatrix = new Matrix4();
let fpsInterval, startTime, now, then, elapsed;

let shapeBuilt = false;
let sphereGeneration = false;

const shapes = {
  rectangle: {
    visible: false,
    geometry: new BoxGeometry(5, 5, 5, 5, 8, 5)
  },
  sphere: {
    visible: false,
    geometry: new SphereGeometry(3, 15, 15)
  }
};

shapes.rectangle.geometry.translate(3, 0, -2);
shapes.sphere.geometry.translate(3, 0, -2);

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updatePhysics() {
  camera.updateMatrixWorld();
  camera.matrixWorldInverse.getInverse(camera.matrixWorld);
  cameraViewProjectionMatrix.multiplyMatrices(
    camera.projectionMatrix,
    camera.matrixWorldInverse
  );
  frustum.setFromProjectionMatrix(cameraViewProjectionMatrix);

  world.step(1 / 60);

  for (let i = 0; i < objectStack.length; i++) {
    const { sphere, body } = objectStack[i];

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

function animateShape(shape) {
  const geometryVertices = shape.geometry.vertices;

  for (let i = 0; i < objectStack.length; i++) {
    const { body: cannonBody } = objectStack[i];

    if (i <= geometryVertices.length - 1) {
      if (objectStack.length < geometryVertices.length) {
        generateSphere(
          -10,
          generateRandomNumber(0, 10),
          generateRandomNumber(-10, 10),
          -10,
          generateRandomNumber(-10, 10),
          0,
          scene,
          world,
          objectStack
        );
      }
      const tl = new TimelineMax();
      const { x, y, z } = geometryVertices[i];
      cannonBody.sleep();
      tl.to(cannonBody.position, { x, y, z });
    }
  }

  shapeBuilt = true;
}

function startAnimation(fps) {
  fpsInterval = 1000 / fps;
  then = window.performance.now();
  startTime = then;
  animate();
}

function animate(timeStamp) {
  requestAnimationFrame(animate);

  now = timeStamp;
  elapsed = now - then;

  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);

    if (objectStack.length < 200 && sphereGeneration) {
      generateSphere(
        -10,
        generateRandomNumber(0, 10),
        generateRandomNumber(-10, 10),
        -5,
        generateRandomNumber(-5, 5),
        7,
        scene,
        world,
        objectStack
      );

      generateSphere(
        -10,
        generateRandomNumber(-10, 20),
        generateRandomNumber(-10, 10),
        2,
        generateRandomNumber(-5, 5),
        7,
        scene,
        world,
        objectStack
      );
    }
  }

  updatePhysics();
  renderer.render(scene, camera);
}

setupObserver(section => {
  if (section === "section-1") {
    for (let i = 0; i < objectStack.length; i++) {
      const { body: cannonBody } = objectStack[i];
      cannonBody.wakeUp();
      // cannonBody.applyImpulse(new Vec3(2, 2, 1));
      cannonBody.velocity.set(
        generateRandomNumber(-5, 5),
        generateRandomNumber(-5, 5),
        0
      );
    }
    sphereGeneration = true;
  } else if (section === "section-2") {
    sphereGeneration = false;
    animateShape(shapes.rectangle);
  } else if (section === "section-3") {
    sphereGeneration = false;
    animateShape(shapes.sphere);
  }
});

startAnimation(50);
