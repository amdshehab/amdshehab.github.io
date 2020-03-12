import { BoxGeometry, MeshLambertMaterial, Mesh } from "three";
import { Body, Box, Vec3, Material } from "cannon";

export function generateBox(z, scene, world) {
  const geometry = new BoxGeometry(0.1, 30, 1);
  const material = new MeshLambertMaterial({
    color: 0x808080
  });
  const box = new Mesh(geometry, material);
  box.position.z = z;

  const groundMaterial = new Material();
  const boxBody = new Body({
    mass: 1,
    type: Body.KINEMATIC,
    material: groundMaterial
  });
  boxBody.position.z = z;
  boxBody.addShape(new Box(new Vec3(0.05, 15, 50)));

  // ground plane
  // const groundShape = new Plane();
  // const groundBody = new Body({
  //   mass: 0,
  //   material: groundMaterial
  // });

  boxBody.position.z = z;
  scene.add(box);
  world.addBody(boxBody);

  return groundMaterial;
}
