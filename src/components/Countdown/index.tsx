import React from 'react'
import * as Styles from './styles'

import Button from '../Button'
import useCountdown from '../../hooks/useCountdown'

const Countdown = (): JSX.Element => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = useCountdown()

  const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('')
  const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

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
