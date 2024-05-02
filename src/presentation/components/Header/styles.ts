import styled from 'styled-components'

export const ContainerMother = styled.header`
  position: fixed;
  width: 100%;
  background-color: #242424;
`

export const Container = styled.header`
  max-width: 72.5rem;
  margin: 0 auto;
  height: 4rem;
  padding: 32px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 20px;
    text-align: center;
  font-style: italic;
  font-weight: 500;
  }

`

export const Wrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const ButtonBack = styled.a`
`