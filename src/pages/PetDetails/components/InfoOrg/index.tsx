import { Container, InfoOrgContent } from './styles'
import { IoLogoWhatsapp } from 'react-icons/io'

import logoOrange from '../../../../assets/icons/logoOrange.svg'

interface IngoOrgProps {
  orgName: string
  orgAddress: string
  orgWhatsapp: string
}

export function InfoOrg({ orgName, orgAddress, orgWhatsapp }: IngoOrgProps) {
  return (
    <Container>
      <div>
        <img src={logoOrange} alt="" />
      </div>
      <InfoOrgContent>
        <h1>{orgName}</h1>
        <span>{orgAddress}</span>
        <button>
          <IoLogoWhatsapp size={25} /> {orgWhatsapp}
        </button>
      </InfoOrgContent>
    </Container>
  )
}
