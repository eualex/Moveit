import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

import * as Styles from "../styles/pages/Home";

const Home: React.FC = () => {
  return (
    <Styles.Container>
      <ExperienceBar />
      <Styles.Wrapper>
        <Styles.LetfContainer>
          <Profile />
          <CompletedChallenges />
          {/* <Countdown /> */}
        </Styles.LetfContainer>
        <Styles.RightContainer>
        </Styles.RightContainer>
      </Styles.Wrapper>
    </Styles.Container>
  )
}

export default Home
