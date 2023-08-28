import { useFrame } from '@react-three/fiber';
import { ReactNode, useRef } from 'react';
import { Group } from 'three';
import { easing } from 'maath';
import { useOverlay } from '../hooks/useOverlay';

export default function CameraRig ({children}: {children: ReactNode}) {
  const { overlay } = useOverlay()
  const group = useRef<Group>(null)

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [overlay === 'intro' ? -state.viewport.width / 4 : 0, 0, 2], 0.25, delta)
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