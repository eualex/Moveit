import React, { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import challenges from '../../utils/challenges.json'

import { ChallengeContextProps, ChallengeProviderProps } from './types'
import LevelUpModal from '../../components/LevelUpModal'

export const ChallengeContext = createContext<ChallengeContextProps>(
  {} as ChallengeContextProps
)

const ChallengeProvider = ({
  children,
  ...rest
}: ChallengeProviderProps): JSX.Element => {
  const [level, setLevel] = useState(rest.level ?? 1)
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  )
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengeCompleted ?? 0
  )
  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengesCompleted', String(challengesCompleted))
  }, [level, currentExperience, challengesCompleted])

  const levelUp = () => {
    setLevel(level + 1)
    setIsLevelUpModalOpen(true)
  }

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]

    setActiveChallenge(challenge)

    new Audio('/assets/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio 🎉', {
        body: `Valendo ${challenge.amount} xp`
      })
    }
  }

  const resetChallenge = () => {
    setActiveChallenge(null)
  }

  const completeChallenge = () => {
    if (!activeChallenge) {
      return ''
    }

    const { amount } = activeChallenge

    let finalExperience = currentExperience + amount

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel
      levelUp()
    }

    setCurrentExperience(finalExperience)
    setActiveChallenge(null)
    setChallengesCompleted(challengesCompleted + 1)
  }

  const closeLevelUpModal = (): void => setIsLevelUpModalOpen(false)

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
        resetChallenge,
        completeChallenge,
        closeLevelUpModal
      }}
    >
      {children}

      {isLevelUpModalOpen && <LevelUpModal />}
    </ChallengeContext.Provider>
  )
}

export default ChallengeProvider
