import { Container, Wrapper, ContainerMother, ButtonBack } from './styles'
import { MiniCart } from '../MiniCart/MiniCart'
import { useLocation } from 'react-router-dom';
import { ArrowSquareLeft } from 'phosphor-react'

export function Header() {
  let location = useLocation();
  return (
    <>
      <ContainerMother>
        <Container>
          {
            location?.pathname === '/checkout'
              ?
              <ButtonBack href="/" >
                <ArrowSquareLeft size={40} weight="fill" color={'#C47F17'} />
              </ButtonBack>
              :
              <div />
          }

          <p className="logo">
            {location?.pathname === '/checkout' ? 'Carrinho' : 'Produtos'}
          </p>
          <Wrapper>
            <MiniCart />
          </Wrapper>
        </Container>
      </ContainerMother>
      <div style={{ height: '4rem' }} />
    </>
  )
}
