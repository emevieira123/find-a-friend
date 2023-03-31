import React, { useCallback } from 'react'

interface CepInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function CepInput({ ...props }: CepInputProps) {
  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    // 99999-999
    e.currentTarget.maxLength = 9
    const value = e.currentTarget.value.length
    if (value === 5) {
      e.currentTarget.value += '-'
    }
  }, [])
  return <input {...props} onKeyUp={handleKeyUp} />
}
