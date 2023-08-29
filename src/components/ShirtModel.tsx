import React from "react";
import { useGLTF, Preload, useTexture, Decal } from "@react-three/drei";
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
  const { nodes, materials } = useGLTF("/shirt_baked.glb") as GLTFResult
  const { color } = useColors()
  const texture = useTexture('three2.png')

  useFrame((_, delta) =>
    easing.dampC(materials.lambert1.color, color.shirt, 0.25, delta)
  )

  return (
    <group position={position} rotation={rotation}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        <Decal 
          position={[0.07, 0.06, 0.15]}
          rotation={[0, 0, 0]}
          scale={0.1}
        >
          <meshPhysicalMaterial
            map={texture}
            depthTest={false}
            depthWrite={true}
            opacity={0.8}
            transparent
          />
        </Decal>
      </mesh>
    </group>
  );
}

export function ShirtModel({ position = [0, 0.28, 0], rotation = [0, 0, 0]}: ModelProps)  {
  return (
    <React.Fragment>
      <Preload all />
      <Model position={position} rotation={rotation}/>
    </React.Fragment>
  );
}