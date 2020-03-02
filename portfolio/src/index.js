import {
  SphereGeometry,
  Mesh,
  PointLight,
  MeshLambertMaterial,
  PlaneGeometry,
  DoubleSide,
  MeshPhongMaterial,
  MeshBasicMaterial
} from "three";
import { setup } from "./setup";
import "./index.css";
import { Box, World, NaiveBroadphase, Body, Vec3, Plane } from "cannon";

const { scene, camera, renderer } = setup();

const geometry = new SphereGeometry(1, 10, 10);
const material = new MeshLambertMaterial({ color: 0xff0000 });
const sphere = new Mesh(geometry, material);
scene.add(sphere);

const planeGeometry = new PlaneGeometry(5, 20, 32);
const planeMaterial = new MeshBasicMaterial({
  color: 0xffff00,
  side: DoubleSide
});
const plane = new Mesh(planeGeometry, planeMaterial);
plane.position.z = -10;
scene.add(plane);

const light = new PointLight(0xff0000, 1, 500);
light.position.set(10, 30, 25);
scene.add(light);

camera.position.z = 5;
renderer.setClearColor(0xffffff);

let world,
  body,
  shape,
  timeStep = 1 / 60,
  cannonPlane,
  cannonShape;

function initCannon() {
  world = new World();
  world.gravity.set(0, 0, -9.82);
  world.broadphase = new NaiveBroadphase();
  world.solver.iterations = 10;

  shape = new Box(new Vec3(1, 1, 1));

  body = new Body({
    mass: 1
  });

  body.addShape(shape);
  body.angularVelocity.set(10, 10, 10);
  body.angularDamping = 0.5;

  cannonPlane = new Box(new Vec3(0, 0, -10));
  cannonShape = new Body({
    mass: 0
  });

  cannonShape.addShape(cannonPlane);

  world.addBody(body);
  world.addBody(cannonShape);
}

initCannon();

function updatePhysics() {
  world.step(timeStep);
  sphere.position.copy(body.position);
  sphere.quaternion.copy(body.quaternion);

  plane.position.copy(cannonShape.position);
  plane.quaternion.copy(cannonShape.quaternion);
}

function animate() {
  requestAnimationFrame(animate);
  updatePhysics();
  renderer.render(scene, camera);
}

animate();
