import { RigidBody } from '@react-three/rapier';

import { MossyRock } from '../models/MossyRock';
import { StylizedRock } from '../models/StylizedRock';
import { WesternRock } from '../models/WesternRock';

const MazeIslandRocks = () => {
  return (
    // <>
    <RigidBody type='fixed' colliders='hull'>
      <WesternRock scale={0.03} position={[5, 0, -30]} />
      <WesternRock scale={0.02} position={[-5, 0, -22]} />
      <WesternRock scale={0.025} position={[-18, 0, -19]} rotation-y={[Math.PI / 2]} />
      <StylizedRock scale={17} position={[-21, 0, -14]} />
      <StylizedRock scale={15} position={[6, 0, -23]} />
      <MossyRock scale={0.05} position={[-5, 0, -30]} />
      <MossyRock scale={0.04} position={[18, 0, -18]} />
      <MossyRock scale={0.02} position={[22, 0, -12]} />
    </RigidBody>
    // </>
  );
};

export default MazeIslandRocks;
