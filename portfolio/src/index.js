import {
  SphereGeometry,
  Mesh,
  MeshLambertMaterial,
  BoxGeometry,
  TextGeometry
} from "three";
import { setupRenderer, setupCannon } from "./setup";
import "./index.css";
import {
  Box,
  Body,
  Vec3,
  Sphere,
  Material,
  Plane,
  ContactMaterial
} from "cannon";

const mat2 = new Material();

const objectStack = [];
const { scene, camera, renderer } = setupRenderer();
const world = setupCannon();

generateFloor(-8);
generateSphere(5);

// setInterval(() => generateSphere(-4), 2000);

function generateSphere(z) {
  const geometry = new SphereGeometry(1, 10, 10);
  const material = new MeshLambertMaterial({ color: 0xff0000 });
  const sphere = new Mesh(geometry, material);
  sphere.geometry.computeVertexNormals();
  sphere.position.z = z;

  const body = new Body({
    mass: 1,
    type: Body.DYNAMIC,
    material: mat2
  });

  body.position.z = z;

  body.addShape(new Sphere(1));
  // body.linearDamping = 0.01;
  // body.velocity.set(0, 0, 5);
  // body.applyImpulse(new Vec3(0, 0, 10), new Vec3(0, 0, 10));

  // body.collisionResponse = true;
  // body.angularVelocity.set(10, 10, 30);
  // body.angularVelocity.set(0, 0, 0);
  // body.linearDamping = -0.5;
  // body.angularDamping = -0.1;
  scene.add(sphere);
  world.addBody(body);

  objectStack.push({
    sphere,
    body
  });
}

function generateFloor(z) {
  const geometry = new BoxGeometry(30, 30, 1);
  const material = new MeshLambertMaterial({
    color: 0x808080
  });
  const box = new Mesh(geometry, material);
  box.position.z = z;

  // const body = new Body({
  //   mass: 1,
  //   type: Body.KINEMATIC
  // });
  // body.position.z = z;
  // body.addShape(new Box(new Vec3(15, 15, 1)));

  // ground plane
  const groundMaterial = new Material();
  const groundShape = new Plane();
  const groundBody = new Body({
    mass: 0,
    material: groundMaterial
  });

  const mat1_ground = new ContactMaterial(groundMaterial, mat2, {
    friction: 0.0,
    restitution: 0.9
  });

  groundBody.position.z = z;
  groundBody.addShape(groundShape);
  scene.add(box);
  world.addBody(groundBody);
  world.addContactMaterial(mat1_ground);
}

function updatePhysics() {
  world.step(1 / 60);
  for (let object of objectStack) {
    const { sphere, body } = object;

    sphere.position.copy(body.position);
    sphere.quaternion.copy(body.quaternion);
  }
}

function animate() {
  requestAnimationFrame(animate);
  updatePhysics();
  renderer.render(scene, camera);
}

animate();
