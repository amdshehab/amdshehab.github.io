import { BoxGeometry, MeshLambertMaterial, Mesh } from "three";
import { Body, Box, Vec3, Material } from "cannon";

export function generateBox(z, scene, world) {
  // const geometry = new BoxGeometry(0.02, 10, 0);
  // const material = new MeshLambertMaterial({
  //   color: 0x808080
  // });
  // const box = new Mesh(geometry, material);
  // box.position.z = z;
  // box.position.x = -2;

  const groundMaterial = new Material();
  const boxBody = new Body({
    mass: 1,
    type: Body.KINEMATIC,
    material: groundMaterial
  });

  // boxBody.position.z = z;
  boxBody.addShape(new Box(new Vec3(0.05, 15, 100)));

  boxBody.position.z = 0;
  boxBody.position.x = -2;
  // scene.add(box);
  world.addBody(boxBody);

  return groundMaterial;
}

// const contactMaterial = new Material();

// const groundMaterial = generateBox(0, scene, world);

// const boxContactMaterial = new ContactMaterial(
//   groundMaterial,
//   contactMaterial,
//   {
//     friction: 0.0,
//     restitution: 0.9
//     // frictionEquationRelaxation: -0.5
//   }
// );

// const sphereContactMaterial = new ContactMaterial(
//   contactMaterial,
//   contactMaterial,
//   {
//     friction: 0.0,
//     restitution: 0.5
//     // frictionEquationRelaxation: -0.5
//   }
// );

// world.addContactMaterial(boxContactMaterial);
// // world.addContactMaterial(sphereContactMaterial);
