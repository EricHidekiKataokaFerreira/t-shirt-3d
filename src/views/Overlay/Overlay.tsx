import './Overlay.css'
import Intro from './Intro';
import Customizer from './Customizer';
import { useOverlay } from '../../hooks/useOverlay';
import { AnimatePresence } from 'framer-motion';

export default function Overlay () {
  const { overlay } = useOverlay()

  const transition = { type: 'spring', duration: 0.8}
  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } }
  }

  const correctOverlay = () => {
    switch (overlay) {
      case "intro":
        return <Intro key='intro' config={config}/>
      case "customizer":
        return <Customizer key='customizer' config={config} />
      default:
        return <Intro key='intro' config={config}/>
    }
  }

  return (
    <AnimatePresence>
      {correctOverlay()}
    </AnimatePresence>
  )
}
