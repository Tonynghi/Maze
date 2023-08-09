/* eslint-disable react/no-unknown-property */
import { RandomizedLight } from '@react-three/drei';

const Lights = () => {
  return (
    <>
      <RandomizedLight
        position={[0, 10, 0]}
        intensity={0.44}
        bias={-0.000001}
        mapSize={1024}
        amount={10}
        size={74}
        far={316}
      />
      <ambientLight intensity={0.16} />
      <hemisphereLight position={[-88, 116, -74]} intensity={0.16} />
      <directionalLight
        intensity={0.44}
        castShadow
        position={[-74, 116, -88]}
        shadow-camera-top={74}
        shadow-camera-left={-74}
        shadow-camera-right={74}
        shadow-camera-bottom={-74}
        shadow-camera-far={316}
        shadow-bias={-0.000001}
        shadow-darkness={0.116}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
    </>
  );
};

export default Lights;
