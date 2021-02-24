import { createContext, useState } from 'react'
import challenges from '../../utils/challenges.json'

import { ChallengeContextProps, ChallengeProviderProps } from './types'

export const ChallengeContext = createContext<ChallengeContextProps>(
  {} as ChallengeContextProps
)

const ChallengeProvider = ({ children }: ChallengeProviderProps) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [activeChallenge, setActiveChallenge] = useState(null)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  const levelUp = () => {
    setLevel(level + 1)
  }

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)
  }

  const resetChallenge = () => {
    setActiveChallenge(null)
  }

  return (
    <ChallengeContext.Provider
      value={{
        level,
        challengesCompleted,
        currentExperience,
        experienceToNextLevel,
        levelUp,
        activeChallenge,
        startNewChallenge,
        resetChallenge
      }}
    >
      {children}
    </ChallengeContext.Provider>
  )
}

export default ChallengeProvider
