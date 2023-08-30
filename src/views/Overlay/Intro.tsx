import { useColors } from '../../hooks/useColors';
import { useOverlay } from '../../hooks/useOverlay';
import './Overlay.css'
import { AiOutlineTwitter, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { motion } from 'framer-motion'

export default function Intro ({ config }: {config: any}) {
  const { toggleOverlay } = useOverlay()
  const { color } = useColors()
  
  return (
    <motion.section {...config} className='intro'>
      <motion.header 
        className='header'
        initial={{opacity: 0, y: -120}}
        animate={{opacity: 1, y: 0}}
        transition={{
          type: 'spring',
          duration: 1.8,
          delay: .2
        }}
      >
        <a className='logo BeauSans'>
          everflow.
        </a>
        <div className='icons-container'>
          <a className='icons' >
            <AiOutlineTwitter size="1.3em" />
          </a>

          <a className='icons'>
            <AiFillLinkedin size="1.3em" />
          </a>

          <a className='icons'>
            <AiFillInstagram size="1.3em" />
          </a>
        </div>
      </motion.header>

      <section className='main'>
        <h1 className='title monumentExtended'>Personalize Your T-Shirt</h1>

        <p className='description BeauSansRegular'>
          Let your imagination run wild with our t-shirt customization platform. With a simple click on the button below, you'll be taken into a world of options where you can choose styles, vibrant colors, and add unique elements to create a shirt that's truly yours. Whether it's to express your individuality or craft a special gift, PersonalizeTee makes the process easy and exhilarating. Feel the freedom to be the designer and wear your creativity. Click now and start customizing!
        </p>

        <div>
          <button 
            className='button'
            onClick={() => toggleOverlay()}
            style={{backgroundColor: color.button}}
          >
            Let's Get Started
          </button>
        </div>

      </section>
    </motion.section>
  )
}