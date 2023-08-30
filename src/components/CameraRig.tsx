import { RootState, useFrame } from '@react-three/fiber';
import { ReactNode, useRef } from 'react';
import { Group, Vector3 } from 'three';
import { easing } from 'maath';
import { useOverlay } from '../hooks/useOverlay';

export default function CameraRig ({children}: {children: ReactNode}) {
  const { overlay } = useOverlay()
  const group = useRef<Group>(null)

  const getCorrectTargetPosition = (state: RootState) => {
    const isMobile = window.innerWidth <= 600;
    const isTab = window.innerWidth <= 1200;

    if (overlay === 'intro') {
      if (isMobile) return [0, 0.5, 3]
      if (isTab) return [0, 0.2, 1.5]
      return [-state.viewport.width / 4, 0, 2]
    }

    if (isMobile) return [0, 0, 3.5]
    return  [0, 0, 2]
  }

  useFrame((state, delta) => {
    const targetPosition = getCorrectTargetPosition(state)
    const targetPositionVector = new Vector3(targetPosition[0], targetPosition[1], targetPosition[2]);
    easing.damp3(state.camera.position, targetPositionVector, 0.25, delta)
    if (group.current?.rotation) {
      easing.dampE(
        group.current?.rotation,
        [state.pointer.y / 5, -state.pointer.x / 2.5, 0],
        0.25,
        delta
      )
    }
  })

  return (
    <group
      ref={group}
    >
      {children}
    </group>
  )
}