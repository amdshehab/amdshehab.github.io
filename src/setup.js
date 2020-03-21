import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  PointLight,
  Color
} from "three";
import { World, NaiveBroadphase, ContactMaterial, Material } from "cannon";

export const setupRenderer = function() {
  const scene = new Scene();
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    40
  );
  const renderer = new WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  const container = document.getElementById("canvasContainer");
  container.appendChild(renderer.domElement);

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  camera.position.z = 5;
  renderer.setClearColor(0x000000, 0);

  const light = new PointLight(0xfffff, 1, 1000);
  light.position.set(10, 20, 25);
  light.castShadow = true;
  light.shadow.radius = 20;
  scene.add(light);

  window.addEventListener("resize", onWindowResize);
  return {
    scene,
    camera,
    renderer
  };
};

export const setupCannon = () => {
  const world = new World();
  world.gravity.set(0, 0, 0);
  world.broadphase = new NaiveBroadphase();
  world.solver.iterations = 10;
  return world;
};
