import React, { ReactNode } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import ChallengeBox from '../components/ChallengeBox'

import CompletedChallenges from '../components/CompletedChallenges'
import ExperienceBar from '../components/ExperienceBar'

import Countdown from '../components/Countdown'
import Profile from '../components/Profile'

import * as Styles from '../styles/pages/Home'
import ChallengeProvider from '../contexts/ChallengeContext'
import CountdownProvider from '../contexts/CountdownContext'

declare interface HomeProps {
  children?: ReactNode
  level: number
  currentExperience: number
  challengeCompleted: number
}

const Home: React.FC<HomeProps> = props => {
  return (
    <ChallengeProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengeCompleted={props.challengeCompleted}
    >
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
    </ChallengeProvider>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengeCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted)
    }
  }
}
