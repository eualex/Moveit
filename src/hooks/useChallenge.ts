import { useContext } from 'react'

import { ChallengeContext } from '../contexts/ChallengeContext'
import { ChallengeContextProps } from '../contexts/ChallengeContext/types'

const useChallenge = (): ChallengeContextProps => {
  const context = useContext(ChallengeContext)
  return context
}

export default useChallenge
