import React from 'react'

import useChallenge from '../../hooks/useChallenge'
import useCountdown from '../../hooks/useCountdown'
import Button from '../Button'

import * as Styles from './styles'

const ChallengeActive = (): JSX.Element => {
  const { resetChallenge, activeChallenge, completeChallenge } = useChallenge()
  const { resetCountdown } = useCountdown()

  const handleChallengeSucceeded = () => {
    completeChallenge()
    resetCountdown()
  }

  const handleChallengeFailed = () => {
    resetChallenge()
    resetCountdown()
  }

  return (
    <Styles.ChallengeActive>
      <Styles.ChallengeBoxHead>
        Ganhe {activeChallenge.amount} xp
      </Styles.ChallengeBoxHead>
      <Styles.ChallengeBoxMain>
        <img src={`assets/icons/${activeChallenge.type}.svg`} alt="exercise" />
        <strong>Exercite-se</strong>
        <p>{activeChallenge.description}</p>
      </Styles.ChallengeBoxMain>
      <Styles.ChallengeBoxFooter>
        <Button type="button" color="danger" onClick={handleChallengeFailed}>
          Falhei
        </Button>
        <Button
          type="button"
          color="success"
          onClick={handleChallengeSucceeded}
        >
          Completei
        </Button>
      </Styles.ChallengeBoxFooter>
    </Styles.ChallengeActive>
  )
}

export default ChallengeActive
