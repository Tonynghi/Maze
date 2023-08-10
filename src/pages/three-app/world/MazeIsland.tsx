import { RigidBody } from '@react-three/rapier';
import { useControls } from 'leva';

import { Altar } from '../models/Altar';
import { Island } from '../models/Island';
import { RedCrsytal } from '../models/RedCrsytal';

// import { MazeFloor } from '../models/MazeFloor';
import MazeBuilder from './MazeBuilder';
import MazeIslandRocks from './MazeIslandRocks';
import MazeIslandTrees from './MazeIslandTrees';
import { MazeMap1 } from './MazeMap';

const MazeIsland = () => {
  const { maze, rocks, trees, crystal } = useControls({
    maze: true,
    rocks: true,
    trees: true,
    crystal: true,
  });

  return (
    <>
      {maze && <MazeBuilder mapArray={MazeMap1} />}
      {rocks && <MazeIslandRocks />}
      {crystal && (
        <RigidBody type='fixed' colliders='hull'>
          <RedCrsytal scale={0.1} position={[-1, 2.5, -25]} />
          <Altar scale={0.75} position={[0, 0, -20]} />
        </RigidBody>
      )}
      {trees && <MazeIslandTrees />}

      <RigidBody type='fixed' colliders='hull'>
        <Island position={[0, 0, -5]} scale={2} />
      </RigidBody>
    </>
  );
};

export default MazeIsland;
