import styled from "styled-components"

export const ContainerCountdown  = styled.div``

export const Countdown  = styled.div`
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

export const Button  = styled.button`
  width: 100%;
  height: 8rem;
  margin-top: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.5rem;

  background-color: var(--blue);
  color: var(--white);

  font-size: 2rem;
  font-weight: 600;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: var(--blue-dark);
  }
`