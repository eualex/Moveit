import { ReactNode } from 'react'

export interface CountdownProviderProps {
  children?: ReactNode
}

export interface CountdownContextProps {
  minutes: number
  seconds: number
  hasFinished: boolean
  isActive: boolean
  startCountdown: () => void
  resetCountdown: () => void
}
