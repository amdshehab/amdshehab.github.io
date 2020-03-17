import { SphereGeometry, MeshLambertMaterial, Mesh } from "three";
import { Body, Sphere } from "cannon";

export function generateSphere(z, x, y, vx, vy, vz, scene, world, objectStack) {
  const geometry = new SphereGeometry(0.05, 0.5, 0.5);
  const material = new MeshLambertMaterial({ color: 0xff0000 });
  const sphere = new Mesh(geometry, material);
  sphere.geometry.computeVertexNormals();
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

  scene.add(sphere);
  world.addBody(body);

  objectStack.push({
    sphere,
    body
  });
}
