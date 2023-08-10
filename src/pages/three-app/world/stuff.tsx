import { Sphere } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

import { BocchiTheRock } from '../models/BocchiTheRock';
import { Ina } from '../models/Ina';

export const Ballin = () => {
  return (
    <RigidBody colliders='ball' restitution={1}>
      <Sphere position={[0, 10, 0]} args={[1]}>
        <meshStandardMaterial color='white' />
      </Sphere>
    </RigidBody>
  );
};

export const Bocchi = () => {
  return (
    <RigidBody colliders='hull' restitution={1}>
      <BocchiTheRock scale={1} position={[0, 20, 0]} />
    </RigidBody>
  );
};

export const Inanis = () => {
  return (
    <RigidBody colliders='cuboid'>
      <Ina scale={1} position={[0, 1, 0]} />
    </RigidBody>
  );
};
