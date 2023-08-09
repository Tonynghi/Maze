/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/island/scene.gltf -o src/pages/three-app/models/Island.jsx -r public 
Author: ThatJamGuy (https://sketchfab.com/EComputer)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-island-67d748c4207d4ce581feedb6446689bd
Title: Low Poly Island
*/
import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';

export const Island = (props) => {
  const { nodes, materials } = useGLTF('/models/island/scene.gltf');
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Island_IslandDirt_0.geometry} material={materials.IslandDirt} />
          <mesh geometry={nodes.Island_IslandGrass_0.geometry} material={materials.IslandGrass} />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/island/scene.gltf');
