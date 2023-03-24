/* eslint-disable no-undef */
import logo from '@/assets/icons/logo.svg'

import { ContainerCard, Name, PetImage, TypeIcon } from './styles'

type CardProps = {
  path: string
  name: string
  type: 'dog' | 'cat'
  onClick?: React.MouseEventHandler<HTMLSpanElement> | undefined
}

export function Card({ path, name, type, onClick }: CardProps) {
  return (
    <ContainerCard onClick={onClick}>
      <PetImage>
        <img src={path} alt={`Foto de ${name}`} />
      </PetImage>
      <div>
        <TypeIcon>
          <div
            style={{ backgroundColor: type === 'cat' ? '#F4D35E' : '#F15156' }}
          >
            <img src={logo} alt="" />
          </div>
        </TypeIcon>
        <Name>{name}</Name>
      </div>
    </ContainerCard>
  )
}
