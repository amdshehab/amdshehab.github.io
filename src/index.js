import { SphereGeometry, Frustum, Matrix4, BoxGeometry } from "three";
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

const shapes = {
  rectangle: {
    visible: false,
    geometry: new BoxGeometry(5, 5, 5, 5, 5, 5),
    built: false
  },
  sphere: {
    visible: false,
    geometry: new SphereGeometry(2, 15, 15),
    built: false
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

    // clean up memory
    if (!frustum.intersectsObject(sphere)) {
      objectStack.splice(i, 1);
      sphere.geometry.dispose();
      sphere.material.dispose();
      scene.remove(sphere);
      world.remove(body);
    }

    if (shapes.rectangle.visible === true && shapes.rectangle.built === false) {
      animateShape(shapes.rectangle, body, i);
    }

    if (shapes.sphere.visible === true && shapes.sphere.built === false) {
      animateShape(shapes.sphere, body, i);
    }

    sphere.position.copy(body.position);
    sphere.quaternion.copy(body.quaternion);
  }
}

function animateShape(shape, cannonBody, i) {
  const geometryVertices = shape.geometry.vertices;
  console.log("whats me ->", geometryVertices);
  if (i < geometryVertices.length - 1) {
    const tl = new TimelineMax();
    const { x, y, z } = geometryVertices[i];

    cannonBody.sleep();
    tl.to(cannonBody.position, { x, y, z });
  } else {
    shape.built = true;
    shapeBuilt = true;
  }
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

    if (objectStack.length < 400 && !shapeBuilt) {
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

      // right to left
      generateSphere(
        -10,
        generateRandomNumber(-10, 20),
        generateRandomNumber(-10, 10),
        10,
        generateRandomNumber(-10, 10),
        1,
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
  if (section === "section-2") {
    shapes.rectangle.visible = true;
    shapes.sphere.visible = false;
    shapes.sphere.built = false;
  } else if (section === "section-3") {
    shapes.sphere.visible = true;
    shapes.rectangle.visible = false;
    shapes.rectangle.built = false;
  }
});

startAnimation(20);
