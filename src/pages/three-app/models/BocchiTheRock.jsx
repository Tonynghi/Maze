/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/bocchi_the_rock/scene.gltf -o src/pages/three-app/models/BocchiTheRock.jsx -r public 
Author: copycatypo (https://sketchfab.com/copycatypo)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bocchi-the-rock-634c4da47a5a445da5cb0e45774b9fa1
Title: bocchi the rock
*/

import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';

export const BocchiTheRock = (props) => {
  const { nodes, materials } = useGLTF('/models/bocchi_the_rock/scene.gltf');
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.main} />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.material}
        position={[0, 0.375, -0.099]}
        rotation={[0.21, 0, 0]}
      />
      <mesh geometry={nodes.Object_8.geometry} material={materials.yellow} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.blue} />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.main}
        position={[0, 0.758, 0]}
      />
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials.glass}
        position={[0.856, 0.277, 1.046]}
        rotation={[-0.033, 0.088, 1.429]}
        scale={[-0.175, 0.175, 0.175]}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.glass}
        position={[-0.852, 0.277, 1.046]}
        rotation={[-0.032, -0.024, -1.413]}
        scale={0.175}
      />
    </group>
  );
};

useGLTF.preload('/models/bocchi_the_rock/scene.gltf');
