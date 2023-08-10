/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/dungeon_floor/scene.gltf -o src/pages/three-app/models/DungeonFloor.jsx -r public 
Author: BillyRayJean (https://sketchfab.com/BillyGreen)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dungeon-floor-041d7d006dac4708b78a9a676da6d0c4
Title: Dungeon floor
*/

import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';

export const DungeonFloor = (props) => {
  const { nodes, materials } = useGLTF('/models/dungeon_floor/scene.gltf');
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.defaultMaterial.geometry}
          material={materials.Floor}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/dungeon_floor/scene.gltf');
