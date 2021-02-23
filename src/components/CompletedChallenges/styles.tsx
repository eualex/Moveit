import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 5.6rem 0;
  padding-bottom: 1.6rem;

  border-bottom: 1px solid #d7d8da;

  font-weight: 500;

  & .completed-challenges {
    font-size: 2rem;
  }

  & .total-completed-challenges {
    font-size: 2.4rem;
  }
`
