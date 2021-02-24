import React, { useEffect, useState } from 'react'
import * as Styles from './styles'

import Button from '../Button'
import useChallenge from '../../hooks/useChallenge'

let countdownTimeout: NodeJS.Timeout

const Countdown = (): JSX.Element => {
  const { startNewChallenge } = useChallenge()

  const [time, setTime] = useState(0.1 * 60)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

  const startCountdown = (): void => {
    setIsActive(true)
  }

  const resetCountdown = (): void => {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTime(0.1 * 60)
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
    <Styles.ContainerCountdown>
      <Styles.Countdown>
        <div>
          <span>{minutesLeft}</span>
          <span>{minutesRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsLeft}</span>
          <span>{secondsRight}</span>
        </div>
      </Styles.Countdown>

      {hasFinished ? (
        <Button color="disable" disabled>
          Ciclo Finalizado
          <img src="assets/icons/success.svg" alt="success" />
        </Button>
      ) : (
        <>
          {isActive ? (
            <Button type="button" color="secondary" onClick={resetCountdown}>
              Abandonar ciclo
            </Button>
          ) : (
            <Button type="button" color="primary" onClick={startCountdown}>
              Iniciar um ciclo
            </Button>
          )}
        </>
      )}
    </Styles.ContainerCountdown>
  )
}

export default Countdown
