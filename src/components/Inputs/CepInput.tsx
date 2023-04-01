import React, { useCallback } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface CepInputProps {
  register: UseFormRegister<any>
  name: string
  placeholder: string
  onBlur: (e: any) => void
  type?: React.HTMLInputTypeAttribute | undefined
}

export function CepInput({
  register,
  name,
  placeholder,
  onBlur,
  type,
}: CepInputProps) {
  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    // 99999-999
    e.currentTarget.maxLength = 9
    const value = e.currentTarget.value.length
    if (value === 5) {
      e.currentTarget.value += '-'
    }
  }, [])
  return (
    <input
      {...register(`${name}`)}
      name={name}
      placeholder={placeholder}
      onKeyUp={handleKeyUp}
      onBlur={onBlur}
      type={type}
    />
  )
}
