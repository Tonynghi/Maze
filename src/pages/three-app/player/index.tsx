import { useFrame, useThree } from '@react-three/fiber';
import {
  CapsuleCollider,
  RapierRigidBody,
  RigidBody,
  // useAfterPhysicsStep,
} from '@react-three/rapier';
import { memo, useMemo, useRef } from 'react';
import { PerspectiveCamera, Vector3Tuple } from 'three';

import { InputControls } from './input';
import { ThirdPersonCamera } from './ThirdPersonCamera';
import { usePointerLockControls } from './usePointerLockControls';

const h = 1.16;
const r = 0.26;

type Props = {
  position: Vector3Tuple;
  cameraPhi: number;
  cameraTheta: number;
  // orientation: Vector3Tuple;
};

export const Player = memo(
  ({
    position = [0, h + 1, 0],
    cameraPhi = 0,
    cameraTheta = 0, // orientation = [0, 0, 1],
  }: Props) => {
    const rigidbody = useRef<RapierRigidBody>(null);
    const modelRef = useRef(null);

    const camera = useThree((s) => s.camera) as PerspectiveCamera;
    const gl = useThree((s) => s.gl);

    const cameraOperator = useMemo(
      () => new ThirdPersonCamera({ camera, phi: cameraPhi, theta: cameraTheta }),
      [camera, cameraPhi, cameraTheta]
    );

    usePointerLockControls(gl, (e) => cameraOperator.move(e.movementX, e.movementY));

    // const character = useMemo(
    //   () =>
    //     new Character({
    //       model: modelRef,
    //       orientation,
    //       rigidbody,
    //       camera,
    //     }),
    //   [rigidbody, camera, orientation]
    // );

    // useAfterPhysicsStep(() => {
    //   character.physicsPostStep();
    // });

    useFrame(() => {
      if (!modelRef.current) return;
      if (!rigidbody.current) return;

      // character.update(delta);
      cameraOperator.update(modelRef.current);
    });

    return (
      <>
        <InputControls />
        <RigidBody
          ref={rigidbody}
          position={position}
          lockRotations
          mass={174}
          friction={0}
          restitution={0}
        >
          <CapsuleCollider args={[h / 2, r]} />
          {/* <Capsule
            name='player'
            ref={modelRef}
            args={[r, h]}
            material={materials.purple}
            castShadow
            receiveShadow
          >
            <Sphere
              name='eyeL'
              args={[0.0322, 8, 8]}
              position={[-0.074, 0.44, 0.223]}
              material={materials.red}
            />
            <Sphere
              name='eyeR'
              args={[0.0322, 8, 8]}
              position={[0.074, 0.44, 0.223]}
              material={materials.black}
            />
            <QuadraticBezierLine
              name='mouth'
              color={colors0x.Current}
              start={[-0.074, 0.3, r]}
              mid={new Vector3(0, r * 2, r)}
              end={[0.074, 0.3, r]}
              lineWidth={3.16}
            />
          </Capsule> */}
        </RigidBody>
      </>
    );
  }
);
