import {
  SphereGeometry,
  SphereBufferGeometry,
  MeshLambertMaterial,
  MeshPhongMaterial,
  Mesh
} from "three";
import { Body, Sphere } from "cannon";

export function generateSphere(z, x, y, vx, vy, vz, scene, world, objectStack) {
  const sphereRadius = 0.03;
  const sphereWidthDivisions = 32;
  const sphereHeightDivisions = 16;
  const sphereMat = new MeshPhongMaterial({ color: "#CA8" });
  const sphereGeo = new SphereBufferGeometry(
    sphereRadius,
    sphereWidthDivisions,
    sphereHeightDivisions
  );

  const sphere = new Mesh(sphereGeo, sphereMat);
  sphere.geometry.computeVertexNormals();
  sphere.geometry.computeFaceNormals();
  sphere.position.z = z;
  sphere.position.x = x;
  sphere.position.y = y;

  const body = new Body({
    mass: 1,
    type: Body.DYNAMIC
  });

  body.position.z = z;
  body.position.x = x;
  body.position.y = y;

  body.addShape(new Sphere(0.025));
  body.velocity.set(vx, vy, vz);

  // console.log("what ->", body.shapes);

  scene.add(sphere);
  world.addBody(body);

  objectStack.push({
    sphere,
    body
  });
}
