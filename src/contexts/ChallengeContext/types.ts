import { ReactNode } from 'react'

export declare interface activeChallengeProps {
  type: 'body' | 'eye'
  description: string
  amount: number
}

export declare interface ChallengeContextProps {
  level: number
  currentExperience: number
  challengesCompleted: number
  experienceToNextLevel: number
  activeChallenge: activeChallengeProps
  resetChallenge: () => void
  levelUp: () => void
  startNewChallenge: () => void
  completeChallenge: () => void
}

export declare interface ChallengeProviderProps {
  children: ReactNode
}
