import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const UserImage = styled.img`
  width: 8.8rem;
  height: 8.8rem;

  border-radius: 50%;
`

export const UserInfo = styled.div`
  margin-left: 2rem;

  & .name {
    font-size: 2.4rem;
    font-weight: 600;
    color: var(--title);
  }

  & .level {
    margin-top: 0.8rem;

    & img {
      margin-right: 1rem;
    }
  }
`
