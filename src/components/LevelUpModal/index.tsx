import React from 'react'
import useChallenge from '../../hooks/useChallenge'

import * as Styles from './styles'

const LevelUpModal = (): JSX.Element => {
  const { level, closeLevelUpModal } = useChallenge()

  return (
    <Styles.Overlay>
      <Styles.LevelUpModalContainer>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>

        <button type="button" onClick={closeLevelUpModal}>
          <img src="/assets/icons/close.svg" alt="close modal" />
        </button>
      </Styles.LevelUpModalContainer>
    </Styles.Overlay>
  )
}

export default LevelUpModal
