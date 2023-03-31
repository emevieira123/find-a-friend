import { queryClient } from '@/main'
import { useMutation } from 'react-query'
// import { useNavigate } from 'react-router-dom'
import registerOrganization from '../queries/registerOrganization'

export function useRegisterOrganization(onSuccess: () => void) {
  // const navigate = useNavigate()
  return useMutation((value: any) => registerOrganization(value, onSuccess), {
    onSuccess() {
      queryClient.invalidateQueries()
      // onSuccess()
      // navigate('/login')
    },
    onError(err: any) {
      console.log(err.message)
    },
  })
}
