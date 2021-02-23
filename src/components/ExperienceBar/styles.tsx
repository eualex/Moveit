import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1.6rem;
  }

  & > div {
    flex: 1;

    height: 4px;
    margin: 2.5rem;
    border-radius: 0.4rem;

    background-color: var(--gray-line);

    position: relative;
  }

  & > div > div {
    width: 50%;

    height: 4px;
    border-radius: 0.4rem;
    background-color: var(--green);
  }

  & > div .current-experience {
    position: absolute;
    left: 50%;
    top: 12px;

    transform: translateX(-50%);
  }
`
