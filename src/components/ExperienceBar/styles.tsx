import styled from 'styled-components'

declare interface ExprerienceBarStyleProps {
  percentLevel: number
}

export const Container = styled.header<ExprerienceBarStyleProps>`
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
    width: ${({ percentLevel }) => `${percentLevel}%`};

    transition: width 0.3s linear;

    height: 4px;
    border-radius: 0.4rem;
    background-color: var(--green);
  }

  & > div .current-experience {
    width: max-content;

    position: absolute;
    left: ${({ percentLevel }) => `${percentLevel}%`};
    top: 12px;

    transition: all 0.3s linear;

    transform: ${({ percentLevel }) => `translateX(-${percentLevel}%)`};
  }
`
