import React from 'react'

import useChallenge from '../../hooks/useChallenge'
import * as Styles from './styles'

const ExperienceBar = (): JSX.Element => {
  const { currentExperience, experienceToNextLevel } = useChallenge()

  const percentLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <Styles.Container percentLevel={percentLevel}>
      <span>0 XP</span>
      <div>
        <div />

        <span className="current-experience">{currentExperience} XP</span>
      </div>
      <span>{experienceToNextLevel} XP</span>
    </Styles.Container>
  )
}

export default ExperienceBar
