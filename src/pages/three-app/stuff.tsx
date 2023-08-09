/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import { Box, Sphere } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { RapierRigidBody, RigidBody, RigidBodyOptions } from '@react-three/rapier';
import { memo, useRef } from 'react';
import { Material, MathUtils, Vector3Tuple } from 'three';

import { materials } from './colors';

type TransformProps = {
  position: Vector3Tuple;
  rotation: RigidBodyOptions['rotation'];
  scale: RigidBodyOptions['scale'];
};

type MaterialProp = {
  material: Material;
};

const FixedBox = (props: TransformProps & MaterialProp) => {
  return (
    <RigidBody type='fixed' colliders='cuboid' {...props}>
      <Box
        castShadow
        receiveShadow
        args={[10, 10, 10]}
        position={[0, 5, 0]}
        material={props.material ?? materials.red}
      />
    </RigidBody>
  );
};

const DynamicBox = (props: TransformProps & MaterialProp) => {
  return (
    <RigidBody colliders='cuboid' angularDamping={3.16} friction={1} {...props}>
      <Box castShadow receiveShadow material={props.material ?? materials.cyan} />
    </RigidBody>
  );
};

const DynamicBall = (props: TransformProps & MaterialProp) => {
  return (
    <RigidBody
      colliders='ball'
      mass={16}
      restitution={1.74}
      friction={0.1}
      angularDamping={1.16}
      {...props}
    >
      <Sphere
        castShadow
        receiveShadow
        args={[0.44]}
        material={props.material ?? materials.orange}
      />
    </RigidBody>
  );
};

const { red, orange, yellow, green, cyan, purple, pink } = materials;
const rainbow = [red, orange, yellow, green, cyan, purple, pink];
export const RainbowStairs = memo(({ spread, ...props }: TransformProps & { spread: number }) => {
  return (
    <RigidBody type='fixed' colliders='cuboid' {...props}>
      {rainbow.map((material, i) => (
        <Box
          // eslint-disable-next-line react/no-array-index-key
          key={i + 2}
          castShadow
          receiveShadow
          material={material}
          args={[3.16, 1.16, 3.16]}
          position={[
            0,
            1.16 / 2 + 1.16 * i,
            -3.16 / 2 - 3.16 * i - (!spread ? 0 : (i + 1) ** 2 * spread),
          ]}
        />
      ))}
    </RigidBody>
  );
});

const Elevator = (props: TransformProps & MaterialProp & { ceiling: number }) => {
  const state = useRef('waiting');
  const rb = useRef<RapierRigidBody>(null);

  useFrame((_, delta) => {
    if (!rb.current) return;
    if (['waiting', 'transitioning'].includes(state.current)) return;

    const height = rb.current.translation().y;
    let velocity = rb.current.linvel().y;

    if (state.current === 'goingUp') {
      if (height < props.ceiling) {
        velocity = MathUtils.lerp(velocity, 7.4, delta);
        rb.current.setLinvel({ x: 0, y: velocity, z: 0 }, true);
      } else {
        state.current = 'transitioning';
        rb.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
        setTimeout(() => {
          state.current = 'goingDown';
        }, 3016);
      }
    }

    if (state.current === 'goingDown') {
      if (height > 0) {
        velocity = MathUtils.lerp(velocity, -7.4, delta);
        rb.current.setLinvel({ x: 0, y: velocity, z: 0 }, true);
      } else {
        state.current = 'waiting';
        rb.current.setLinvel({ x: 0, y: 0, z: 0 }, true);
        if (props.position) {
          const [x, y, z] = props.position;
          rb.current.setTranslation({ x, y, z }, true);
        }
      }
    }
  });

  return (
    <RigidBody
      ref={rb}
      type='kinematicVelocity'
      colliders='cuboid'
      onCollisionEnter={() => {
        setTimeout(() => {
          if (state.current === 'waiting') {
            state.current = 'goingUp';
          }
        }, 744);
      }}
      {...props}
    >
      <Box
        castShadow
        receiveShadow
        args={[3.16, 0.116, 10]}
        position={[0, 0.116 / 2, 0]}
        material={props.material ?? materials.current}
      />
    </RigidBody>
  );
};

const Stuff = () => {
  return (
    <>
      <DynamicBox
        position={[3, 1, -6]}
        rotation={undefined}
        scale={undefined}
        material={new Material()}
      />
      <DynamicBall
        position={[7, 4, -4]}
        rotation={undefined}
        scale={undefined}
        material={new Material()}
      />
      <RainbowStairs position={[1, 0, -16]} rotation={undefined} scale={undefined} spread={0} />
      <RainbowStairs
        position={[1 + 3.16, 1.16 * 7, -16 - 3.16 * 7]}
        rotation={[0, -Math.PI / 2, 0]}
        spread={0.234}
        scale={undefined}
      />
      <FixedBox
        material={materials.yellow}
        rotation={[Math.PI / 4, 0, 0]}
        position={[10 + 3.16 * 7, 4, -26]}
        scale={[1, 0.116, 3.16]}
      />
      <FixedBox
        position={[-11, 0, -6]}
        scale={[0.3, 1, 0.6]}
        rotation={undefined}
        material={new Material()}
      />
      <FixedBox
        position={[30, 0, 16]}
        scale={[1, 7.4, 3.16]}
        rotation={undefined}
        material={new Material()}
      />
      <Elevator
        position={[25 - 3.16 / 2, 0, 16]}
        scale={[1, 1, 3.16]}
        ceiling={74}
        rotation={undefined}
        material={new Material()}
      />
    </>
  );
};

export default Stuff;
