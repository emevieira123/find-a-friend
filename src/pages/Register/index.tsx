import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  Wrapper,
  Container,
  Card,
  FormWrapper,
  Form,
  InputWrapper,
  Buttons,
  Button,
  TextErrorMessage,
} from './styles'

import LogoHorizontal from '../../assets/icons/logo-horizontal.svg'
import Visibility from '../../assets/icons/visibility.svg'
import VisibilityOff from '../../assets/icons/visibility-off.svg'
import { FormRegisterData, schema } from './types'
import { useRegisterOrganization } from './hooks/useRegisterOrganization'
import { MapRender } from '../PetDetails/components/GeoMap'
import { useGetCoordinates } from '../PetDetails/hooks/useGetCoordinates'

export function Register() {
  const [cep, setCep] = useState('')
  const [visiblePassword, setVisiblePassword] = useState('password')
  const [visibleConfirmPassword, setVisibleConfirmPassword] =
    useState('password')

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormRegisterData>({
    resolver: yupResolver(schema),
  })

  const { mutate: saveRegistration } = useRegisterOrganization(() => 0)

  const { data: dataLocation, isLoading: loadingCoordinates } =
    useGetCoordinates(cep)

  console.log('coordinates', dataLocation)

  function handleRegisterOrganization(data: FormRegisterData) {
    console.log(data)
    saveRegistration(data)
    reset()
  }

  // function handleRenderMapLocation() {
  //   // TO DO
  // }

  useEffect(() => {
    reset({
      address: dataLocation?.address,
    })
  }, [dataLocation, reset])

  return (
    <Wrapper>
      <Container>
        <Card>
          <img src={LogoHorizontal} className="logo" alt="" />
        </Card>
        <FormWrapper>
          <h1>Cadastre sua organização</h1>
          <Form onSubmit={handleSubmit(handleRegisterOrganization)}>
            <label htmlFor="name">Organização</label>
            <InputWrapper>
              <input
                type="text"
                {...register('name')}
                name="name"
                id="name"
                placeholder="Liberty Pet"
              />
            </InputWrapper>
            <TextErrorMessage>{errors.name?.message}</TextErrorMessage>

            <label htmlFor="email">Email</label>
            <InputWrapper>
              <input
                type="text"
                {...register('email')}
                name="email"
                id="email"
                placeholder="mayk@email.com"
              />
            </InputWrapper>
            <TextErrorMessage>{errors.email?.message}</TextErrorMessage>

            <label htmlFor="cep">Cep</label>
            <InputWrapper>
              <input
                type="text"
                {...register('cep')}
                name="cep"
                id="cep"
                placeholder="12345-000"
                onBlur={(e) => setCep(e.target.value)}
              />
            </InputWrapper>
            <TextErrorMessage>{errors.cep?.message}</TextErrorMessage>

            <label htmlFor="address">Endereço</label>
            <InputWrapper>
              <input
                type="text"
                {...register('address')}
                name="address"
                // value={dataLocation?.address}
                id="address"
                placeholder="Rua do Meio, 1825"
              />
            </InputWrapper>
            <TextErrorMessage>{errors.address?.message}</TextErrorMessage>

            {!loadingCoordinates && (
              <MapRender
                latitude={dataLocation?.coordinates.latitude! || 0}
                longitude={dataLocation?.coordinates.longitude! || 0}
              />
            )}

            <label htmlFor="whatsappNumber">Whatsapp</label>
            <InputWrapper>
              <input
                type="text"
                {...register('whatsappNumber')}
                name="whatsappNumber"
                id="whatsappNumber"
                placeholder="(99) 99999-9999"
              />
            </InputWrapper>
            <TextErrorMessage>
              {errors.whatsappNumber?.message}
            </TextErrorMessage>

            <label htmlFor="password">Senha</label>
            <InputWrapper>
              <input
                type={visiblePassword}
                {...register('password')}
                name="password"
                id="password"
                placeholder="Senha"
              />
              <img
                onClick={() => {
                  visiblePassword === 'password'
                    ? setVisiblePassword('text')
                    : setVisiblePassword('password')
                }}
                src={
                  visiblePassword === 'password' ? VisibilityOff : Visibility
                }
                alt=""
              />
            </InputWrapper>
            <TextErrorMessage>{errors.password?.message}</TextErrorMessage>

            <label htmlFor="passwordConfirm">Confirmar senha</label>
            <InputWrapper>
              <input
                type={visibleConfirmPassword}
                {...register('passwordConfirm')}
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="Confirme sua senha"
              />
              <img
                onClick={() => {
                  visibleConfirmPassword === 'password'
                    ? setVisibleConfirmPassword('text')
                    : setVisibleConfirmPassword('password')
                }}
                src={
                  visibleConfirmPassword === 'password'
                    ? VisibilityOff
                    : Visibility
                }
                alt=""
              />
            </InputWrapper>
            <TextErrorMessage>
              {errors.passwordConfirm?.message}
            </TextErrorMessage>

            <Buttons>
              <Button type="submit" onClick={() => {}} className="primary">
                Cadastrar
              </Button>
            </Buttons>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}
