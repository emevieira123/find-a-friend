import {
  Wrapper,
  Container,
  Card,
  FormWrapper,
  Form,
  InputWrapper,
  Buttons,
  Button,
} from './styles'

import LogoHorizontal from '../../assets/icons/logo-horizontal.svg'
import Visibility from '../../assets/icons/visibility.svg'
import VisibilityOff from '../../assets/icons/visibility-off.svg'
// import Eye from '../../assets/icons/password-eye.svg'
import { useState } from 'react'

export function Register() {
  const [visiblePassword, setVisiblePassword] = useState('password')
  const [visibleConfirmPassword, setVisibleConfirmPassword] =
    useState('password')
  // function handleRegisterOrganization() {
  //   // TO dO
  // }

  // function handleRenderMapLocation() {
  //   // TO DO
  // }

  return (
    <Wrapper>
      <Container>
        <Card>
          <img src={LogoHorizontal} className="logo" alt="" />
        </Card>
        <FormWrapper>
          <h1>Cadastre sua organização</h1>
          <Form>
            <label htmlFor="email">Email</label>
            <InputWrapper>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="mayk@email.com"
              />
            </InputWrapper>

            <label htmlFor="address">Cep</label>
            <InputWrapper>
              <input type="text" name="cep" id="cep" placeholder="12345-000" />
            </InputWrapper>

            <label htmlFor="address">Endereço</label>
            <InputWrapper>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Rua do Meio, 1825"
              />
            </InputWrapper>

            <label htmlFor="contact">Whatsapp</label>
            <InputWrapper>
              <input
                type="text"
                name="contact"
                id="contact"
                placeholder="(99) 99999-9999"
              />
            </InputWrapper>

            <label htmlFor="password">Senha</label>
            <InputWrapper>
              <input
                type="password"
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

            <label htmlFor="confirmPassword">Confirmar senha</label>
            <InputWrapper>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
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
