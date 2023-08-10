/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/ina/scene.gltf -o src/pages/three-app/models/Ina.jsx -r public 
Author: R4ven (https://sketchfab.com/R4ven3D)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/hololive-ninomae-inanis-reupload-95911512692d4998ac103abf3d414b60
Title: Hololive - Ninomae Ina'nis (REUPLOAD)
*/

import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';

export const Ina = (props) => {
  const { nodes, materials } = useGLTF('/models/ina/scene.gltf');
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.Material} />
      <mesh geometry={nodes.Object_5.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.Hair} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.Cloth} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.Body} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.Head} />
    </group>
  );
};

useGLTF.preload('/models/ina/scene.gltf');