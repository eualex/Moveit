import styled from 'styled-components'

export const Overlay = styled.div`
  background-color: rgba(242, 243, 245, 0.8);

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const LevelUpModalContainer = styled.div`
  background-color: var(--white);

  width: 100%;
  max-width: 400px;

  padding: 3.2rem 4.8rem;

  border-radius: 0.5rem;

  box-shadow: 0 0 60px rgba(0 0 0 / 0.05);
  text-align: center;

  position: relative;

  & header {
    font-size: 14rem;
    font-weight: 500;
    color: var(--blue);

    background: url('assets/icons/levelup.svg') no-repeat center;

    background-size: contain;
  }

  & strong {
    font-size: 3.6rem;

    color: var(--title);
  }

  & p {
    font-size: 1.8rem;
    color: var(--text);

    margin-top: 0.4rem;
  }

  & button {
    position: absolute;
    right: 0.8rem;
    top: 0.8rem;

    background: transparent;
    border: none;

    font-size: 0;
  }
`
