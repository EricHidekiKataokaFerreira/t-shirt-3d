import { createContext, useState, ReactNode } from "react"

interface DecalContextType {
  decal: string
  selectDecal: (Decal: string) => void
}

interface DecalProviderProps {
  children: ReactNode
}

export const DecalContext = createContext<DecalContextType | undefined>(undefined)

export function DecalProvider({ children }: DecalProviderProps) {
  const [decal, setDecal] = useState<string>('three2')

  const selectDecal = (Decal: string) => {
    setDecal(Decal)
  }

  const contextValue: DecalContextType = {
    decal,
    selectDecal
  }

  return (
    <DecalContext.Provider value={contextValue}>
      {children}
    </DecalContext.Provider>
  )
}
