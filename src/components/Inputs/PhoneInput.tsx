import React, { useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { mask, unMask } from 'remask'

interface PhoneInputProps {
  register: UseFormRegister<any>
  name: string
  placeholder: string
  type?: React.HTMLInputTypeAttribute | undefined
}

export function PhoneInput({
  register,
  name,
  placeholder,
  type,
}: PhoneInputProps) {
  const [value, setValue] = useState('')

  function onChange(e: any) {
    const originalValue = unMask(e.target.value)
    const maskedValue = mask(originalValue, [
      '(99) 9999-9999',
      '(99) 9 9999-9999',
    ])
    setValue(maskedValue)
  }
  return (
    <input
      {...register(`${name}`)}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}
