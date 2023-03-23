import { EnergyActive, EnergyInactive } from '../../utils/Energy'
import { SizeActive, SizeInactive } from '../../utils/Size'
import { CardPetInfo, ContainerInfoPet } from './styles'
import IconAmbiente from '../../../../assets/icons/AmbienteIcon.svg'

interface CardProps {
  dataSource: any
}

export function CardInfoPet({ dataSource }: CardProps) {
  function handlePorte(value: string) {
    if (value === 'small') {
      return { size: 1, size_name: 'Pequenino' }
    } else if (value === 'medium') {
      return { size: 2, size_name: 'Médio' }
    } else {
      return { size: 3, size_name: 'Grande' }
    }
  }

  function handleEnergy(value: number) {
    switch (value) {
      case 1:
        return 'Muito Baixa'
      case 2:
        return 'Baixa'
      case 3:
        return 'Média'
      case 4:
        return 'Alta'
      default:
        return 'Muito Alta'
    }
  }

  return (
    <ContainerInfoPet>
      <CardPetInfo>
        <div style={{ width: '100%', display: 'flex', gap: '0.5rem' }}>
          {EnergyActive.slice(0, dataSource?.energy).map((active, index) => {
            return <img src={active.icon} alt="" key={index} />
          })}
          {EnergyInactive.slice(dataSource?.energy).map((inactive, index) => {
            return <img src={inactive.icon} alt="" key={index} />
          })}
        </div>
        <strong>{handleEnergy(dataSource?.energy)}</strong>
      </CardPetInfo>
      <CardPetInfo>
        <img style={{ width: '20px' }} src={IconAmbiente} alt="" />
        <strong>Ambiente amplo</strong>
      </CardPetInfo>
      <CardPetInfo>
        <div style={{ width: '100%', display: 'flex', gap: '0.5rem' }}>
          {SizeActive.slice(0, handlePorte(dataSource?.size).size).map(
            (active, index) => {
              return <img src={active.icon} alt="" key={index} />
            },
          )}
          {SizeInactive.slice(handlePorte(dataSource?.size).size).map(
            (inactive, index) => {
              return <img src={inactive.icon} alt="" key={index} />
            },
          )}
        </div>
        <strong>{handlePorte(dataSource?.size).size_name}</strong>
      </CardPetInfo>
    </ContainerInfoPet>
  )
}
