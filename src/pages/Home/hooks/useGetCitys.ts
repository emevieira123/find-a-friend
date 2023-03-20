import { api } from '@/infra/api'
import { URLS } from '@/infra/URLS'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'

async function getCitys(sigla: string) {
  if (!sigla) return
  return await api
    .get(URLS.LISTA_CIDADE_POR_ESTADO.replace(':UF', sigla))
    .then((resp) => resp.data.citys)
}

export default function useGetCitys(sigla?: string) {
  const resultQuery = useQuery(
    [URLS.LISTA_CIDADE_POR_ESTADO.replace(':UF', sigla!)],
    () => getCitys(sigla!),
    {
      onError: (err) => {
        console.log(err)
        toast.error('Sigla de UF inválida')
      },
    },
  )

  return resultQuery
}
