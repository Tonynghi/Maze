/* eslint-disable react/no-unknown-property */
import { OrbitControls, Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';

import Scene from './scene';
import World from './world';

// import { Player } from './player';

const ThreeApp = () => {
  return (
    <Canvas
      shadows
      gl={{
        logarithmicDepthBuffer: true,
      }}
      camera={{ position: [0, 20, 20] }}
    >
      <gridHelper args={[60, 60]} />
      <OrbitControls />
      <Sky />
      <Scene />
      <Physics gravity={[0, -10, 0]}>
        <World />
        {/* <Player position={[0, 0, 0]} cameraPhi={0} cameraTheta={0} orientation={[0, 0, 0]} /> */}
      </Physics>
    </Canvas>
  );
};

export default ThreeApp;
