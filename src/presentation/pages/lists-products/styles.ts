/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 72.5rem;
  margin: 0 auto 10rem auto;
  display: flex;  
  justify-content: center;
  height: 100%;


  .title {
    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    color: red;
    margin-bottom: 3.4rem;

    @media (max-width: 480px) {
      font-size: 1.7rem;
    }
  }
`

export const ShelfGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  width: 90%;
  height: 100%;
  row-gap: 2.5rem;
  column-gap: 2rem;
  margin-top: 26px;

  @media (max-width: 480px) {
    grid-template-columns: auto;
    justify-content: center;
  }
`
