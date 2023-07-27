/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/models/scene.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.074, 0, -1.521]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh geometry={nodes.Plane001_Plane002_BlackWood001.geometry} material={materials['BlackWood.001']} />
        <mesh geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry} material={materials['BlackCoatSteel.001']} />
        <mesh geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry} material={materials['GrayPlastic.001']} />
        <mesh geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry} material={materials['WhiteSteelScrew.001']} />
        <mesh geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry} material={materials['BlackPlastic.001']} />
      </group>
      <group position={[-0.868, 1.694, -2.038]}>
        <mesh geometry={nodes.SM_ShelfSM_Shelf1_1.geometry} material={materials.lambert2SG} />
        <mesh geometry={nodes.SM_ShelfSM_Shelf1_1_1.geometry} material={materials['795548.001']} />
      </group>
      <group position={[-1.302, 2.071, -1.986]}>
        <mesh geometry={nodes['Node-Mesh001'].geometry} material={materials.lambert4SG} />
        <mesh geometry={nodes['Node-Mesh001_1'].geometry} material={materials['lambert2SG.001']} />
        <mesh geometry={nodes['Node-Mesh001_2'].geometry} material={materials['lambert3SG.002']} />
      </group>
      <mesh geometry={nodes.WawaRug.geometry} material={materials.Rug} position={[-0.281, 0.009, 0.765]} />
      <group position={[-0.61, 2.044, -1.958]} rotation={[-Math.PI, 0.728, -Math.PI]}>
        <mesh geometry={nodes.mesh434900071.geometry} material={materials.mat14} />
        <mesh geometry={nodes.mesh434900071_1.geometry} material={materials.mat13} />
        <mesh geometry={nodes.mesh434900071_2.geometry} material={materials['mat12.001']} />
        <mesh geometry={nodes.mesh434900071_3.geometry} material={materials['mat21.003']} />
        <mesh geometry={nodes.mesh434900071_4.geometry} material={materials['mat23.001']} />
        <mesh geometry={nodes.mesh434900071_5.geometry} material={materials.mat11} />
      </group>
      <group position={[-0.044, 0.981, -1.346]} rotation={[0, -0.165, 0]}>
        <mesh geometry={nodes.mesh425587018.geometry} material={materials['mat21.004']} />
        <mesh geometry={nodes.mesh425587018_1.geometry} material={materials['mat22.001']} />
        <mesh geometry={nodes.mesh425587018_2.geometry} material={materials['mat9.002']} />
        <mesh geometry={nodes.mesh425587018_3.geometry} material={materials['mat16.001']} />
      </group>
      <group position={[0.454, 0.939, -1.723]} rotation={[Math.PI, -1.099, Math.PI]}>
        <mesh geometry={nodes.iMac_1.geometry} material={materials.Screen} />
        <mesh geometry={nodes.iMac_1_1.geometry} material={materials.ScreenBlack} />
        <mesh geometry={nodes.iMac_1_2.geometry} material={materials.iMacBody} />
      </group>
      <mesh geometry={nodes.Comp_Mouse.geometry} material={materials['lambert3SG.003']} />
      <group position={[-0.78, 1.071, -1.61]}>
        <mesh geometry={nodes.mesh24448074.geometry} material={materials['mat9.003']} />
        <mesh geometry={nodes.mesh24448074_1.geometry} material={materials['mat20.001']} />
        <mesh geometry={nodes.mesh24448074_2.geometry} material={materials['mat21.005']} />
      </group>
      <group position={[-2.019, -0.042, -1.526]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Houseplant_7_1.geometry} material={materials['Black.001']} />
        <mesh geometry={nodes.Houseplant_7_2.geometry} material={materials['Brown.001']} />
        <mesh geometry={nodes.Houseplant_7_3.geometry} material={materials['Plant_Green.001']} />
      </group>
      <group position={[2.13, -0.081, -1.055]} rotation={[-Math.PI, 0.672, -Math.PI]}>
        <mesh geometry={nodes['palm_tree_01-Mesh'].geometry} material={materials['795548.001']} />
        <mesh geometry={nodes['palm_tree_01-Mesh_1'].geometry} material={materials['8BC34A.001']} />
        <mesh geometry={nodes['palm_tree_01-Mesh_2'].geometry} material={materials['DD9944.001']} />
      </group>
      <group position={[-0.278, 0, -0.708]} rotation={[0, -0.376, 0]}>
        <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.Office_Cha} />
        <mesh geometry={nodes['Node-Mesh_1'].geometry} material={materials.Office_Cha_1} />
      </group>
      <mesh geometry={nodes.Plane001.geometry} material={materials.Floor} />
      <mesh geometry={nodes.Plane001_1.geometry} material={materials.White} />
      <mesh geometry={nodes.Plane001_2.geometry} material={materials.Wall} />
      <mesh geometry={nodes.Plane001_3.geometry} material={materials.Glass} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
