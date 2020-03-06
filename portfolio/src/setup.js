import { Scene, PerspectiveCamera, WebGLRenderer, PointLight } from "three";
import { World, NaiveBroadphase, ContactMaterial, Material } from "cannon";

export const setupRenderer = function() {
  const scene = new Scene();
  const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    500
  );
  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  camera.position.z = 5;
  renderer.setClearColor(0xffffff);

  const light = new PointLight(0xff0000, 1, 500);
  light.position.set(10, 30, 25);
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
  world.gravity.set(0, 0, -10);
  world.broadphase = new NaiveBroadphase();
  world.solver.iterations = 10;

  // world.defaultContactMaterial.contactEquationStiffness = 1e8;
  // world.defaultContactMaterial.contactEquationRelaxation = 10;
  var mat2_ground = new ContactMaterial(new Material(), new Material(), {
    friction: 0
    // restitution: 30
  });

  // world.addContactMaterial(mat2_ground);

  return world;
};
