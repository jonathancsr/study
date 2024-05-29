import Logo from '../../assets/logo.svg'
import { CartButton } from '../../components/CartButton'
import { HeaderContainer, Nav, RightSectionContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <img src={Logo} alt="" />
        <RightSectionContainer>
          <CartButton quantity={2} />
        </RightSectionContainer>
      </Nav>
    </HeaderContainer>
  )
}
