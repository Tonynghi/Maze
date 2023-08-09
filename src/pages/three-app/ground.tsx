// import { Box } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

// import { materials } from './colors';
import { Island } from './models/Island';

const Ground = () => {
  return (
    <RigidBody type='fixed' colliders='cuboid'>
      {/* <Box args={[100, 10, 100]} position={[0, -5, 0]} material={materials.green} receiveShadow /> */}
      <Island position={[0, 0, 0]} scale={2} />
    </RigidBody>
  );
};

export default Ground;
