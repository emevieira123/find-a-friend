import * as yup from 'yup'

export const schema = yup
  .object({
    name: yup.string().required('O campo nome é obrigatório'),
    email: yup
      .string()
      .email('Informe um email válido')
      .required('O campo de email é obrigatório'),
    cep: yup.string().required('O campo cep é obrigatório'),
    address: yup.string().required('O campo de endereço é obrigatório'),
    whatsappNumber: yup.string().required('O campo whatsapp é obrigatório'),
    password: yup
      .string()
      .min(6, 'A senha de ter pelo menos 6 dígitos')
      .required('O campo de senha é obrigatório'),
    passwordConfirm: yup
      .string()
      .required('O campo confirmar senha é obrigatório')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
  })
  .required()
export type FormRegisterData = yup.InferType<typeof schema>
