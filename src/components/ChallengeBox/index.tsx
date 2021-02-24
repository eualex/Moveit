import React from 'react'

import useChallenge from '../../hooks/useChallenge'
import ChallengeActive from './ChallengeActive'
import ChallengeNotActive from './ChallengeNotActive'

import * as Styles from './styles'

const ChallengeBox = (): JSX.Element => {
  const { activeChallenge } = useChallenge()

  return (
    <Styles.ChallengeBox>
      {activeChallenge ? <ChallengeActive /> : <ChallengeNotActive />}
    </Styles.ChallengeBox>
  )
}

export default ChallengeBox
