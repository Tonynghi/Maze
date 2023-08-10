import { RigidBody } from '@react-three/rapier';

import { HeavenTree } from '../models/HeavenTree';

const MazeIslandTrees = () => {
  return (
    <RigidBody type='fixed' colliders='hull'>
      <HeavenTree scale={0.04} position={[14, 0, -24]} rotation-y={(3 * Math.PI) / 4} />
      <HeavenTree scale={0.04} position={[-14, 0, -24]} rotation-y={(-3 * Math.PI) / 4} />
    </RigidBody>
  );
};

export default MazeIslandTrees;
