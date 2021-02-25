import React from 'react'
import Head from 'next/head'

import CountdownProvider from '../contexts/CountdownContext/indext'
import CompletedChallenges from '../components/CompletedChallenges'
import ExperienceBar from '../components/ExperienceBar'
import ChallengeBox from '../components/ChallengeBox'
import Countdown from '../components/Countdown'
import Profile from '../components/Profile'

import * as Styles from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Styles.Container>
      <Head>
        <title>Inicio | Moveit</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
        <Styles.Wrapper>
          <Styles.LetfContainer>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </Styles.LetfContainer>
          <Styles.RightContainer>
            <ChallengeBox />
          </Styles.RightContainer>
        </Styles.Wrapper>
      </CountdownProvider>
    </Styles.Container>
  )
}

export default Home
