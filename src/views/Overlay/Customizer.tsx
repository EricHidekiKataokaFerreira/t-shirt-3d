import { AiOutlineDownload, AiOutlineArrowLeft } from "react-icons/ai"
import { useOverlay } from "../../hooks/useOverlay"
import { useColors } from "../../hooks/useColors"
import { useDecal } from "../../hooks/useDecal"
import {motion} from 'framer-motion'

export default function Customizer ({ config }: {config: any}) {
  const { toggleOverlay } = useOverlay()
  const { color, selectColor } = useColors()
  const {selectDecal} = useDecal()
  
  const colors = ['#F4F4F4', '#FFA564', '#C495FF', '#88A9FF', '#8DF07D', '#000000']
  const decals = ['eternal', 'react_thumb', 'three2_thumb', 'pmndrs_thumb']

  const onClickDownload = () => {
    const link = document.createElement('a')
    link.setAttribute('download', 'canvas.png')
  
    const canvas = document.querySelector('canvas') as HTMLCanvasElement
    if (canvas) {
      const canvasDataURL = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
      link.setAttribute('href', canvasDataURL)
      link.click()
    } else {
      console.error('Canvas element not found.')
    }
  }
  
  
  return (
    <motion.section {...config} className="customizer">
      <header className='header'>
        <a className='logo BeauSans'>
          everflow.
        </a>
        <div className='icons-container'>
          <button 
            className="go-back-button"
            onClick={() => toggleOverlay()}
          >
            Go back <span className="span-icon"><AiOutlineArrowLeft /></span>
          </button>
        </div>
      </header>

      <div className="customizer-body">
        <div className="options-container">
          <div className="decal-options">
            {decals.map((decal: string) => {
                return (
                  <div
                    key={decal}
                    className="decal"
                    onClick={() => selectDecal(decal)} 
                  >
                    <img src={decal + '.png'} alt='brand'/>
                  </div>
                )
              })}
          </div>
          
          <div className="color-options">
            {colors.map((color: string) => {
              return (
                <div
                  key={color}
                  className="color"
                  style={{ background: color }}
                  onClick={() => selectColor(color)}
                >
                </div>
              )
            })}
          </div>
        </div>

      </div>
        <div className="button-container">
          <button 
            style={{backgroundColor: color.button}} 
            className="button"
            onClick={() => onClickDownload()}
          >
            Download <span style={{marginLeft: '5px'}}><AiOutlineDownload /></span>
          </button>
        </div>
    </motion.section>
  )
}