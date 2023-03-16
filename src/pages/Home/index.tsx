import { Container, ContentContainer, LogoContainer } from './styles'

import Logo from '../../assets/icons/logo.svg'
import ImgDogs from '../../assets/images/home-image-dogs.svg'
import { FooterHome } from './components/Footer'

export function Home() {
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeState() {
    // TO DO
  }

  function handleChangeCity() {
    // TO DO
  }

  return (
    <Container>
      <LogoContainer>
        <img src={Logo} alt="" />
        <span>FindAFriend</span>
      </LogoContainer>

      <ContentContainer>
        <h1>
          Leve <br />
          a felicidade <br />
          para o seu lar
        </h1>
        <img src={ImgDogs} alt="" />
      </ContentContainer>

      <FooterHome />
    </Container>
  )
}
