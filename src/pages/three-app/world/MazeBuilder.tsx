import { Box } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

import { DungeonFloor } from '../models/DungeonFloor';
import { Monster } from '../models/Monster';
import { Sword } from '../models/Sword';

export type WallProps = {
  x: number;
  y: number;
  z: number;
};

const Wall = ({ x, y, z }: WallProps) => {
  return (
    <Box position={[x + 0.5, y, z + 0.5]} args={[1, 2, 1]}>
      <meshStandardMaterial color='#717171' />
    </Box>
  );
};

const MapToCoordinate = (mapArray: Array<Array<number>>, height: number) => {
  const verticalLength = mapArray.length;
  const horizontalLength = mapArray[0].length;

  const offsetX = verticalLength / 2;
  const offsetZ = horizontalLength / 2;
  const CoordinateArray = [];

  for (let h = 0; h < verticalLength; h += 1) {
    for (let w = 0; w < horizontalLength; w += 1) {
      if (mapArray[h][w] === 1) CoordinateArray.push([w - offsetX, height, h - offsetZ]);
    }
  }

  return CoordinateArray;
};

export type MazeBuilderProps = {
  mapArray: Array<Array<number>>;
};

const MazeBuilder = ({ mapArray }: MazeBuilderProps) => {
  const height = 2;
  const CoordinateArray = MapToCoordinate(mapArray, height);

  return (
    <RigidBody type='fixed' colliders='hull'>
      {CoordinateArray.map((coordinate: Array<number>) => (
        <Wall x={coordinate[0]} y={coordinate[1]} z={coordinate[2]} />
      ))}
      <DungeonFloor scale={11} position={[0, 0.5, 0]} />
      <Sword scale={0.5} position={[-8, 2, -8]} />
      <Monster scale={0.1} position={[8, 2, -8]} />
    </RigidBody>
  );
};

export default MazeBuilder;
