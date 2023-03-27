import { useGetPetDetails } from './hooks/useGetPetDetails'
import { CardInfoPet } from './components/CardInfoPet'
import { Gallery } from './components/Gallery'

import { FaArrowLeft } from 'react-icons/fa'
import logo from '../../assets/icons/logo.svg'

import { Container, Content, Divider, Sidebar, TextDescription } from './styles'

import { GeoMap } from './components/GeoMap'
import { InfoOrg } from './components/InfoOrg'
import { Requirement } from './components/Requirement'
import { ButtonContact } from './components/ButtonContact'
import { useParams } from 'react-router-dom'

export function PetDetails() {
  const { petId } = useParams()
  const { data: dataPetDetails, isLoading: loadingDetails } = useGetPetDetails(
    petId!,
  )

  function handleToGoBack() {
    window.history.back()
  }

  return (
    <>
      <Sidebar>
        <img src={logo} alt="" />
        <button onClick={handleToGoBack}>
          <FaArrowLeft size={20} />
        </button>
      </Sidebar>
      <Container>
        <span style={{ opacity: '0.5' }}>Seu novo amigo</span>
        {loadingDetails ? (
          <h1>Carregando...</h1>
        ) : (
          <Content>
            <Gallery petId={petId!} />
            <TextDescription>
              <h1>{dataPetDetails?.name}</h1>
              <span>{dataPetDetails?.description}</span>
            </TextDescription>

            <CardInfoPet dataSource={dataPetDetails!} />

            <GeoMap cep={dataPetDetails?.org?.cep!} />

            <Divider />

            <InfoOrg
              orgName={dataPetDetails?.org?.nome!}
              orgAddress={dataPetDetails?.org?.address!}
              orgWhatsapp={dataPetDetails?.org?.whatsappNumber.slice(3)!}
            />

            <Divider />

            <Requirement petId={petId!} />

            <Divider />

            <ButtonContact
              whatsappNumber={dataPetDetails?.org?.whatsappNumber.slice(3)!}
            />
          </Content>
        )}
      </Container>
    </>
  )
}
