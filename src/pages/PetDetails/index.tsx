import { useGetPetDetails } from './hooks/useGetPetDetails'
import { CardInfoPet } from './components/CardInfoPet'
import { Gallery } from './components/Gallery'

import { FaArrowLeft } from 'react-icons/fa'
import logo from '../../assets/icons/logo.svg'

import { Container, Content, Sidebar, TextDescription } from './styles'

export function PetDetails() {
  const { data: dataPetDetails } = useGetPetDetails(
    'e12378c3-0870-48c4-8341-3e0f780c3201',
  )

  return (
    <>
      <Sidebar>
        <img src={logo} alt="" />
        <button>
          <FaArrowLeft size={20} />
        </button>
      </Sidebar>
      <Container>
        <span style={{ opacity: '0.5' }}>Seu novo amigo</span>
        <Content>
          <Gallery
            petId="e12378c3-0870-48c4-8341-3e0f780c3201"
            imgInitial={dataPetDetails?.photo_url}
          />
          <TextDescription>
            <h1>{dataPetDetails?.name}</h1>
            <span>{dataPetDetails?.description}</span>
          </TextDescription>

          <CardInfoPet dataSource={dataPetDetails} />
        </Content>
      </Container>
    </>
  )
}
