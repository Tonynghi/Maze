import { OrbitControls, Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { useControls } from 'leva';

import Ground from './ground';
import Scene from './scene';

// import { Player } from './player';
// import Stuff from './stuff';

const ThreeApp = () => {
  const { ground } = useControls({
    ground: true,
    controls: 'WASD to move, SHIFT to sprint, SPACE to jump',
  });
  return (
    <Canvas
      shadows
      gl={{
        logarithmicDepthBuffer: true,
      }}
    >
      <OrbitControls />
      <Sky />
      <Scene />
      <Physics gravity={[0, -26, 0]} colliders={false}>
        {/* <Stuff /> */}
        {ground && <Ground />}
        {/* <Player position={[0, 0, 0]} cameraPhi={0} cameraTheta={0} orientation={[0, 0, 0]} /> */}
      </Physics>
    </Canvas>
  );
};

export default ThreeApp;
