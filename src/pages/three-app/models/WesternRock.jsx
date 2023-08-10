/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/western_rock/scene.gltf -o src/pages/three-app/models/WesternRock.jsx -r public 
Author: pixelgrapher (https://sketchfab.com/pixelgrapher)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/western-stylised-rock-24c821bbe0a1469ba66b9d5894546d9a
Title: Western Stylised Rock
*/

import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';

export const WesternRock = (props) => {
  const { nodes, materials } = useGLTF('/models/western_rock/scene.gltf');
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.rockFInal_LOD0_lambert2_0.geometry} material={materials.lambert2} />
    </group>
  );
};

useGLTF.preload('/models/western_rock/scene.gltf');