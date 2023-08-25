import { useFrame } from '@react-three/fiber';
import { ReactNode, useRef } from 'react';
import { Group } from 'three';
import { easing } from 'maath';

export default function CameraRig ({children}: {children: ReactNode}) {
  const group = useRef<Group>(null)

  useFrame((state, delta) => {
    easing.dampE(
      group.current?.rotation,
      [state.pointer.y / 5, -state.pointer.x / 2.5, 0],
      0.25,
      delta
    )
  })

  return (
    <group
      ref={group}
    >
      {children}
    </group>
  )
}