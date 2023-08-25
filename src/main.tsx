import React from 'react'
import ReactDOM from 'react-dom/client'
import CanvasView from './views/CanvasView.tsx'
import './main.css'
import Overlay from './views/Overlay/Overlay.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CanvasView position={[-0.4, 0, 2.5]} fov={25}/>
    <Overlay />
  </React.StrictMode>,
)
