/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
/* eslint-disable prettier/prettier */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/floor/scene.gltf -o src/pages/three-app/models/MazeFloor.jsx -r public 
Author: MMandali (https://sketchfab.com/rasmon)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/floor-asset-low-poly-3065fa921bb94bb69c9d50f4098e5083
Title: Floor Asset Low Poly
*/

import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';

export const MazeFloor = (props) => {
  const { nodes, materials } = useGLTF('/models/floor/scene.gltf');
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.defaultMaterial.geometry}
          material={materials.DefaultMaterial}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/floor/scene.gltf');
