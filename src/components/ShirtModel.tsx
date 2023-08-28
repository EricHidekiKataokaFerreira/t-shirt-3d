import React from "react";
import { useGLTF, Preload } from "@react-three/drei";
import { GLTF } from 'three-stdlib'
import { useColors } from "../hooks/useColors";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

type ModelProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
};

type GLTFResult = GLTF & {
  nodes: {
    T_Shirt_male: THREE.Mesh
  }
  materials: {
    lambert1 : THREE.MeshStandardMaterial
  }
}

function Model({ position , rotation }: ModelProps) {
  const { nodes, materials } = useGLTF("/shirt_starter_test.glb") as GLTFResult
  const { color } = useColors()

  useFrame((state, delta) =>
    easing.dampC(materials.lambert1.color, color.shirt, 0.25, delta)
  )

  return (
    <group position={position} rotation={rotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        
      />
    </group>
  );
}

export function ShirtModel({ position = [0.419, 0, 0], rotation = [Math.PI / 2, 0, 0]}: ModelProps)  {
  return (
    <React.Fragment>
      <Preload all />
      <Model position={position} rotation={rotation}/>
    </React.Fragment>
  );
}