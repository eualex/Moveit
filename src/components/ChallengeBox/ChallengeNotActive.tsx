import React from 'react'

import * as Styles from './styles'

const ChallengeNotActive = (): JSX.Element => {
  return (
    <Styles.ChallengeNotActive>
      <strong>Finalize um ciclo para receber um desafio</strong>
      <p>
        <img src="assets/icons/level-up.svg" alt="Level Up" />
        Avance um level completando desafios.
      </p>
    </Styles.ChallengeNotActive>
  )
}

export default ChallengeNotActive
