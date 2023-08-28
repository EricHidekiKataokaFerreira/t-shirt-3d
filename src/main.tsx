import React from 'react'
import ReactDOM from 'react-dom/client'
import CanvasView from './views/CanvasView.tsx'
import './main.css'
import Overlay from './views/Overlay/Overlay.tsx'
import { OverlayProvider } from './contexts/OverlayContext.tsx'
import { ColorProvider } from './contexts/ColorContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorProvider>
      <OverlayProvider>
        <CanvasView 
          position={[0, 0, 2.5]} 
          fov={25}
          rotation={[0, 0, 0]}
        />
        <Overlay />
      </OverlayProvider>
    </ColorProvider>
  </React.StrictMode>,
)
