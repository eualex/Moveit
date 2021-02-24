import styled from 'styled-components'

export const ContainerCountdown = styled.div`
  & button:disabled {
    display: flex;
    align-items: center;
    border-bottom: 0.5rem solid var(--green);

    & > img {
      margin-left: 1rem;

      width: 2.5rem;
    }
  }
`

export const Countdown = styled.div`
  display: flex;
  align-items: center;

  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  & > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background-color: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

    border-radius: 0.5rem;

    font-size: 13.6rem;
    text-align: center;
  }

  & > div span {
    flex: 1;
  }

  & > div span:first-child {
    border-right: 0.1rem solid var(--background);
  }

  & > div span:last-child {
    border-left: 0.1rem solid var(--background);
  }

  & > span {
    font-size: 10rem;

    margin: 0 0.8rem;
  }
`
