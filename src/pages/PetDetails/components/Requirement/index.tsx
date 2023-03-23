import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useGetRequirements } from '../../hooks/useGetRequirements'
import {
  ContainerRequirements,
  ContentRequirements,
  InfoRequirements,
} from './styles'

interface RequirementProps {
  petId: string
}

export function Requirement({ petId }: RequirementProps) {
  const { data: dataRequirement, isLoading } = useGetRequirements(petId)
  return (
    <ContainerRequirements>
      <h1>Requisitos para adoção</h1>

      <ContentRequirements>
        {isLoading ? (
          <strong>Carregando...</strong>
        ) : (
          dataRequirement?.map((requirement: any, index: number) => {
            return (
              <InfoRequirements key={index}>
                <AiOutlineInfoCircle size={24} />
                <p>{requirement?.title}</p>
              </InfoRequirements>
            )
          })
        )}
      </ContentRequirements>
    </ContainerRequirements>
  )
}
