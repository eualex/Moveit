import React from 'react'

import useChallenge from '../../hooks/useChallenge'
import * as Styles from './styles'

const CompletedChallenges = (): JSX.Element => {
  const { challengesCompleted } = useChallenge()

  return (
    <Styles.Container>
      <span className="completed-challenges">Desafios Completos</span>
      <span className="total-completed-challenges">{challengesCompleted}</span>
    </Styles.Container>
  )
}

export default CompletedChallenges
