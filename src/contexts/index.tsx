import React, { ReactNode } from 'react'

declare interface ContextsProps {
  children?: ReactNode
}

const Contexts = ({ children }: ContextsProps): JSX.Element => {
  return <>{children}</>
}

export default Contexts
