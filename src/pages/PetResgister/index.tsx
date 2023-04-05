import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FormPetRegisterData, schema } from './types'
import { FaArrowLeft } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'

import logo from '../../assets/icons/logo.svg'
import logoOrange from '../../assets/icons/logoOrange.svg'

import { Sidebar } from '../PetDetails/styles'
import {
  Button,
  Buttons,
  Container,
  Divider,
  Form,
  FormWrapper,
  HeaderContainer,
  InputWrapper,
  TextErrorMessage,
  Wrapper,
} from './styles'
// import { Spinner } from '@/components/Spinner'

export function PetRegister() {
  const {
    handleSubmit,
    register,
    // reset,
    formState: { errors },
  } = useForm<FormPetRegisterData>({
    resolver: yupResolver(schema),
  })

  function handlePetRegister(data: any) {
    console.log(data)
  }

  function handleToGoBack() {
    window.history.back()
  }

  return (
    <>
      <Sidebar>
        <img src={logo} alt="" />
        <button onClick={handleToGoBack}>
          <FaArrowLeft size={20} />
        </button>
      </Sidebar>
      <Wrapper>
        <HeaderContainer>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <img src={logoOrange} alt="" />
            <div>
              <h1>Seu Cãopanheiro</h1>
              <span>Rua do meio, 123 , Boa viagem, Recife - PE </span>
            </div>
          </div>
          <button>
            <FiLogOut size={24} />
          </button>
        </HeaderContainer>
        <Container>
          <FormWrapper>
            <h1>Adicione um pet</h1>

            <Divider />

            <Form onSubmit={handleSubmit(handlePetRegister)}>
              <label htmlFor="name">Nome</label>
              <InputWrapper>
                <input
                  type="text"
                  {...register('name')}
                  name="name"
                  id="name"
                  placeholder="Nome do pet"
                />
              </InputWrapper>
              <TextErrorMessage>{errors.name?.message}</TextErrorMessage>

              <label htmlFor="about">Sobre</label>
              <InputWrapper>
                <textarea
                  {...register('about')}
                  name="about"
                  id="about"
                  rows={4}
                  cols={60}
                  placeholder="Escreva aqui..."
                />
              </InputWrapper>
              <TextErrorMessage>{errors.about?.message}</TextErrorMessage>

              <Buttons>
                <Button type="submit" onClick={() => {}} className="secondary">
                  {/* {!isLoading ? 'Cadastrar' : <Spinner />} */}
                  Cadastrar
                </Button>
              </Buttons>
            </Form>
          </FormWrapper>
        </Container>
      </Wrapper>
    </>
  )
}
