import * as yup from 'yup'

export const schema = yup
  .object({
    name: yup.string().required('O campo nome é obrigatório'),
    about: yup.string().required('O campo de sobre é obrigatório'),
  })
  .required()
export type FormPetRegisterData = yup.InferType<typeof schema>
