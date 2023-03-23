import { BsWhatsapp } from 'react-icons/bs'
import { Button, ContainerButton } from './styles'

interface ButtonContactProps {
  whatsappNumber: string
}

export function ButtonContact({ whatsappNumber }: ButtonContactProps) {
  return (
    <ContainerButton>
      <Button
        href={`https://api.whatsapp.com/send?phone=55${whatsappNumber}`}
        target="_blank"
      >
        <BsWhatsapp size={25} /> Entrar em contato
      </Button>
    </ContainerButton>
  )
}
