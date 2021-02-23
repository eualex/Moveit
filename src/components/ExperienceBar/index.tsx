import * as Styles from './styles'

const ExperienceBar: React.FC  = () => {
  return (
    <Styles.Container>
      <span>0 XP</span>
      <div>
        <div />

        <span className="current-experience" >300 XP</span>
      </div>
      <span>600 XP</span>
    </Styles.Container>
  )
}

export default ExperienceBar