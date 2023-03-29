import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/hooks/useAuth'
import { Spinner } from '@/components/Spinner'
import { URLS } from '@/infra/URLS'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

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

const schema = yup
  .object({
    email: yup
      .string()
      .email('Informe um email válido')
      .required('O campo de email é obrigatório'),
    password: yup.string().required('O campo de senha é obrigatório'),
  })
  .required()
type FormData = yup.InferType<typeof schema>

export function Login() {
  const [visiblePassword, setVisiblePassword] = useState('password')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const auth = useAuth()
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  console.log(errors)

  async function handleLogin(data: FormData, e: any) {
    e.preventDefault()
    try {
      setIsLoading(!isLoading)
      await auth.authenticated(data.email, data.password)
      navigate('/dashboard')
    } catch (err) {
      setIsLoading(isLoading)
    }
    console.log(data)
    reset()
  }

  function handleRegisterOrganization() {
    navigate(URLS.REGISTER)
  }

  return (
    <Wrapper>
      <Container>
        <Card>
          <img src={LogoHorizontal} className="logo" alt="" />
          {/* <img src={Pets} alt="" /> */}
        </Card>
        <FormWrapper>
          <h1>Boas-vindas!</h1>
          <Form onSubmit={handleSubmit(handleLogin)}>
            <label htmlFor="email">Email</label>
            <InputWrapper>
              <input
                type="text"
                {...register('email', { required: true })}
                name="email"
                id="email"
                placeholder="Email"
              />
            </InputWrapper>
            <TextErrorMessage>{errors.email?.message}</TextErrorMessage>

            <label htmlFor="password">Senha</label>
            <InputWrapper>
              <input
                type={visiblePassword}
                {...register('password', { required: true })}
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

            <Buttons>
              <Button type="submit" onClick={() => {}} className="primary">
                {!isLoading ? 'Login' : <Spinner />}
              </Button>
              <Button
                type="button"
                onClick={handleRegisterOrganization}
                className="secondary"
              >
                Cadastrar minha organização
              </Button>
            </Buttons>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}
