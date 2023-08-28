import { AiOutlineDownload, AiOutlineArrowLeft } from "react-icons/ai"
import { useOverlay } from "../../hooks/useOverlay"
import { useColors } from "../../hooks/useColors"

export default function Customizer () {
  const { toggleOverlay } = useOverlay()
  const { color, selectColor } = useColors()
  
  const colors = ['#F4F4F4', '#FFA564', '#C495FF', '#88A9FF', '#8DF07D', '#000000']
  const decals = ['eternal', 'react_thumb', 'three2_thumb', 'pmndrs_thumb']
  
  return (
    <section className="customizer">
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
          <button style={{backgroundColor: color.button}} className="button">
            Download <span style={{marginLeft: '5px'}}><AiOutlineDownload /></span>
          </button>
        </div>
    </section>
  )
}