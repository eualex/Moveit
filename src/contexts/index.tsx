import { ReactNode } from "react"

import ChallengeProvider from "./ChallengeContext"

declare interface ContextsProps {
  children: ReactNode
}

const Contexts = ({ children }: ContextsProps) => {
  return (
    <ChallengeProvider>
      {children}
    </ChallengeProvider>
  )
}

export default Contexts