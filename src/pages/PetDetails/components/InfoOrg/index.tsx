import { Container, InfoOrgContent } from './styles'
import { IoLogoWhatsapp } from 'react-icons/io'

import logoOrange from '../../../../assets/icons/logoOrange.svg'

interface IngoOrgProps {
  orgName: string
  orgAddress: string
  orgWhatsapp: string
}

export function InfoOrg({ orgName, orgAddress, orgWhatsapp }: IngoOrgProps) {
  const FormatPhoneNumber = `(${orgWhatsapp.slice(0, 2)}) 9 ${orgWhatsapp.slice(
    2,
    6,
  )}-${orgWhatsapp.slice(6)}`

  return (
    <Container>
      <div>
        <img src={logoOrange} alt="" />
      </div>
      <InfoOrgContent>
        <h1>{orgName}</h1>
        <span>{orgAddress}</span>
        <a
          href={`https://api.whatsapp.com/send?phone=55${orgWhatsapp}`}
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoWhatsapp size={25} /> {FormatPhoneNumber}
        </a>
      </InfoOrgContent>
    </Container>
  )
}
