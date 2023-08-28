import './Overlay.css'
import Intro from './Intro';
import Customizer from './Customizer';
import { useOverlay } from '../../hooks/useOverlay';

export default function Overlay () {
  const { overlay } = useOverlay()

  switch (overlay) {
    case "intro":
      return <Intro />
    case "customizer":
      return <Customizer />
    default:
      return <Intro />
  }
}
