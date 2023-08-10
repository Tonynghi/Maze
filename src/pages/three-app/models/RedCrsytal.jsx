/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/red_crystal/scene.gltf -o src/pages/three-app/models/RedCrsytal.jsx -r public 
Author: LowlyPoly (https://sketchfab.com/lowlypoly)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/stylized-crystal-0a0c75dab0844e7fa5b299d4af858bec
Title: Stylized Crystal
*/

import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';

export const RedCrsytal = (props) => {
  const { nodes, materials } = useGLTF('/models/red_crystal/scene.gltf');
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.crystal17_2_crystal_17_2_0.geometry}
        material={materials.crystal_17_2}
        position={[0, 18.492, 0]}
        scale={16.987}
      />
    </group>
  );
};

useGLTF.preload('/models/red_crystal/scene.gltf');