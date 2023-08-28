import { createContext, useState, ReactNode } from "react"

type OverlayType = "intro" | "customizer"

interface OverlayContextType {
  overlay: OverlayType
  toggleOverlay: () => void
}

interface OverlayProviderProps {
  children: ReactNode
}

export const OverlayContext = createContext<OverlayContextType | undefined>(undefined)

export function OverlayProvider({ children }: OverlayProviderProps) {
  const [overlay, setOverlay] = useState<OverlayType>("intro")

  const toggleOverlay = () => {
    setOverlay(overlay === 'intro' ? 'customizer' : 'intro')
  }

  const contextValue: OverlayContextType = {
    overlay,
    toggleOverlay
  }

  return (
    <OverlayContext.Provider value={contextValue}>
      {children}
    </OverlayContext.Provider>
  )
}
