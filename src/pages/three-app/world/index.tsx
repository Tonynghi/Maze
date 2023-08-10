import { useControls } from 'leva';

import { Island2 } from '../models/Island2';
import { Island3 } from '../models/Island3';
import { Island4 } from '../models/Island4';
import { Island5 } from '../models/Island5';

import MazeIsland from './MazeIsland';
import { Ballin, Bocchi, Inanis } from './stuff';

const World = () => {
  const { mazeIsland, island2, island3, island4, island5, ballin, bocchi, inanis } = useControls({
    mazeIsland: true,
    island2: false,
    island3: false,
    island4: false,
    island5: false,
    ballin: true,
    bocchi: false,
    inanis: false,
  });
  return (
    <>
      {island2 && <Island2 scale={50} position={[80, 0, -80]} />}
      {island3 && <Island3 scale={0.06} position={[-70, 0, -70]} />}
      {island4 && <Island4 scale={1} position={[70, 0, 80]} rotation-y={(-3 * Math.PI) / 4} />}
      {island5 && <Island5 scale={0.2} position={[-80, -10, 90]} />}
      {mazeIsland && <MazeIsland />}
      {ballin && <Ballin />}
      {bocchi && <Bocchi />}
      {inanis && <Inanis />}
    </>
  );
};

export default World;
