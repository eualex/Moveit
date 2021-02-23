import * as Styles from './styles'

const Countdown: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.Minutes>
        <span>2</span>
        <span>5</span>
      </Styles.Minutes>
      <span>:</span>
      <Styles.Seconds>
        <span>0</span>
        <span>0</span>
      </Styles.Seconds>
    </Styles.Container>
  )
}

export default Countdown
