import { createContext, useState, ReactNode } from "react"

type ColorType = {
  button: string
  shirt: string
}

interface ColorContextType {
  color: {
    button: string
    shirt: string
  }
  selectColor: (color: string) => void
}

interface ColorProviderProps {
  children: ReactNode
}

export const ColorContext = createContext<ColorContextType | undefined>(undefined)

export function ColorProvider({ children }: ColorProviderProps) {
  const [color, setColor] = useState<ColorType>({ shirt: "#F4F4F4", button: '#202020'})

  const selectColor = (color: string) => {
    if (color === '#F4F4F4') setColor({shirt: color, button: '#202020'})
    else setColor({shirt: color, button: color})
  }

  const contextValue: ColorContextType = {
    color,
    selectColor
  }

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  )
}
