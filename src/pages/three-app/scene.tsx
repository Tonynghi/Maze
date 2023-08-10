import Lights from './lights';
import SceneSky from './models/SceneSky';

const Scene = () => {
  return (
    <>
      <Lights />
      <SceneSky scale={1} position={[0, -5, 0]} />
    </>
  );
};

export default Scene;
