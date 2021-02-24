import React, { ReactNode } from 'react'

import ChallengeProvider from './ChallengeContext'

declare interface ContextsProps {
  children: ReactNode
}

const Contexts = ({ children }: ContextsProps): JSX.Element => {
  return <ChallengeProvider>{children}</ChallengeProvider>
}

export default Contexts
