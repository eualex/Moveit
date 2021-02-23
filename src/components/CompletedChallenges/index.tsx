import * as Styles from './styles'

const CompletedChallenges: React.FC = () => {
  return (
    <Styles.Container>
      <span className="completed-challenges">Desafios Completos</span>
      <span className="total-completed-challenges">5</span>
    </Styles.Container>
  )
}

export default CompletedChallenges