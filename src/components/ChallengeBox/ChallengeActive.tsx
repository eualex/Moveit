import useChallenge from '../../hooks/useChallenge'
import Button from '../Button'

import * as Styles from './styles'

const ChallengeActive = () => {
  const { resetChallenge, activeChallenge } = useChallenge()

  return (
    <Styles.ChallengeActive>
      <Styles.ChallengeBoxHead>Ganhe {activeChallenge.amount} xp</Styles.ChallengeBoxHead>
      <Styles.ChallengeBoxMain>
        <img src={`assets/icons/${activeChallenge.type}.svg`} alt="exercise" />
        <strong>Exercite-se</strong>
        <p>
          {activeChallenge.description}
        </p>
      </Styles.ChallengeBoxMain>
      <Styles.ChallengeBoxFooter>
        <Button type="button" color="danger" onClick={resetChallenge}>
          Falhei
        </Button>
        <Button type="button" color="success">
          Completei
        </Button>
      </Styles.ChallengeBoxFooter>
    </Styles.ChallengeActive>
  )
}

export default ChallengeActive
