import React, { useState, createContext, useEffect } from 'react'
import useChallenge from '../../hooks/useChallenge'
import { CountdownContextProps, CountdownProviderProps } from './types'

export const CountdownContext = createContext({} as CountdownContextProps)

let countdownTimeout: NodeJS.Timeout

const CountdownProvider = ({
  children
}: CountdownProviderProps): JSX.Element => {
  const { startNewChallenge } = useChallenge()

  const [time, setTime] = useState(25 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const startCountdown = (): void => {
    setIsActive(true)
  }

  const resetCountdown = (): void => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setHasFinished(false)
    setTime(25 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true)
      setIsActive(false)
      startNewChallenge()
    }
  }, [isActive, time])

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}

export default CountdownProvider
