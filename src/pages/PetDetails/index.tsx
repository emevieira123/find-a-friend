import { useGetPetDetails } from './hooks/useGetPetDetails'
import { CardInfoPet } from './components/CardInfoPet'
import { Gallery } from './components/Gallery'

import { FaArrowLeft } from 'react-icons/fa'
import logo from '../../assets/icons/logo.svg'

import { Container, Content, Divider, Sidebar, TextDescription } from './styles'

import { GeoMap } from './components/GeoMap'
import { InfoOrg } from './components/InfoOrg'

export function PetDetails() {
  const { data: dataPetDetails, isLoading: loadingDetails } = useGetPetDetails(
    '137d9eb5-aae2-4aa2-958a-525ec830dde9',
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
        {loadingDetails ? (
          <h1>Carregando...</h1>
        ) : (
          <Content>
            <Gallery
              petId="137d9eb5-aae2-4aa2-958a-525ec830dde9"
              imgInitial={dataPetDetails?.photo_url}
            />
            <TextDescription>
              <h1>{dataPetDetails?.name}</h1>
              <span>{dataPetDetails?.description}</span>
            </TextDescription>

            <CardInfoPet dataSource={dataPetDetails} />

            <GeoMap cep={dataPetDetails?.org?.cep} />

            <Divider />
            <InfoOrg
              orgName={dataPetDetails?.org?.nome}
              orgAddress={dataPetDetails?.org?.address}
              orgWhatsapp={dataPetDetails?.org?.whatsappNumber}
            />
            <Divider />
          </Content>
        )}
      </Container>
    </>
  )
}
