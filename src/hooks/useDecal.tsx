import { useContext } from "react"
import { DecalContext } from "../contexts/DecalContext"

export function useDecal() {
  const context = useContext(DecalContext)
  if (!context) {
    throw new Error("useDecal must be used within an DecalProvider")
  }
  return context
}