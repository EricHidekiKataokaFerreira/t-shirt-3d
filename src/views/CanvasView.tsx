import { Canvas } from '@react-three/fiber'
import { Center, Environment, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { ShirtModel } from '../components/ShirtModel';
import CameraRig from '../components/CameraRig';

function BackDrop() {
  return (
    <AccumulativeShadows
      temporal
      frames={60}
      alphaTest={0.23}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0.25, -0.14]}
      color=''
    >
      <RandomizedLight
        amount={4}
        radius={15}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />

      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CanvasView({ position = [-0, 0, 2.5], fov = 25} : {position: any, fov: number}) {
  return (
    <Canvas 
      camera={{position, rotation: [0, 0, 0], fov}}
      eventSource={document.getElementById('root') || undefined}
      eventPrefix="client"
      shadows
    >
      <ambientLight intensity={1}/>
      <Environment preset='city' />
      
      <CameraRig>
        <Center>
          <BackDrop/>
          <ShirtModel/>
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasView
 