import styled from 'styled-components'

export const ChallengeBox = styled.div`
  height: 100%;
  padding: 2.4rem 3.2rem;

  border-radius: 0.5rem;

  background-color: var(--white);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & strong {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 1.4;
  }

  & p {
    display: flex;
    flex-direction: column;
    align-items: center;

    line-height: 1.4;

    max-width: 70%;
    margin-top: 4.8rem;
  }

  & p img {
    margin-bottom: 1.6rem;
  }
`

export const ChallengeActive = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`

export const ChallengeBoxHead = styled.header`
  padding: 0 3.2rem 2.4rem;

  border-bottom: 0.1rem solid var(--gray-line);

  text-align: center;
  color: var(--blue);

  font-size: 2rem;
  font-weight: 600;
`

export const ChallengeBoxMain = styled.main`
  flex: 1;

  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & strong {
    margin: 1rem;

    color: var(--title);
    font-weight: 600;
    font-size: 3.2rem;
  }

  & p {
    line-height: 1.4;
  }
`

export const ChallengeBoxFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;

  & button {
    height: 4.8rem;

    font-size: 1.6rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
