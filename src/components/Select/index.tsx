import chevron from '@/assets/icons/chevron-bottom.svg'
import { ChangeEvent, ComponentProps } from 'react'
import {
  Filter,
  FilterLabel,
  FilterInput,
  FilterInputOption,
  FilterWrapper,
} from './styles'

type SelectProps = ComponentProps<typeof FilterInput> & {
  label: string
  name: string
  direction: 'row' | 'column'
  disabled?: boolean
  options: {
    value: string | number
    label: string
  }[]
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}

export function Select({
  label,
  name,
  options,
  onChange,
  direction,
  disabled,
}: SelectProps) {
  function handlePlaceholderSelect(value: string) {
    if (value === 'UF') {
      return 'UF'
    } else if (value === 'Cidades') {
      return 'Cidade'
    } else {
      return 'Selecione'
    }
  }
  return (
    <Filter direction={direction}>
      <FilterLabel htmlFor={name}>{label}</FilterLabel>
      <FilterWrapper>
        <FilterInput
          name={name}
          id={name}
          onChange={onChange}
          disabled={disabled}
        >
          <FilterInputOption value="">
            {handlePlaceholderSelect(name)}
          </FilterInputOption>
          {options?.map((option) => {
            return (
              <FilterInputOption key={option.value} value={option.value}>
                {option.label}
              </FilterInputOption>
            )
          })}
        </FilterInput>
        <img src={chevron} alt="" style={{ width: '13px' }} />
      </FilterWrapper>
    </Filter>
  )
}
