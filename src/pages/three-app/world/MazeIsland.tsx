import { RigidBody } from '@react-three/rapier';

import { Altar } from '../models/Altar';
import { DungeonFloor } from '../models/DungeonFloor';
import { Island } from '../models/Island';
import { RedCrsytal } from '../models/RedCrsytal';

// import { MazeFloor } from '../models/MazeFloor';
import MazeIslandRocks from './MazeIslandRocks';
import MazeIslandTrees from './MazeIslandTrees';

const MazeIsland = () => {
  return (
    <>
      <MazeIslandRocks />
      <RigidBody type='fixed' colliders='hull'>
        <RedCrsytal scale={0.1} position={[-1, 2.5, -25]} />
        <Altar scale={0.75} position={[0, 0, -20]} />
      </RigidBody>
      <MazeIslandTrees />
      <RigidBody type='fixed' colliders='hull'>
        <DungeonFloor scale={10} position={[0, 0.5, 0]} />
      </RigidBody>
      <RigidBody type='fixed' colliders='hull'>
        <Island position={[0, 0, -5]} scale={2} />
      </RigidBody>
    </>
  );
};

export default MazeIsland;
