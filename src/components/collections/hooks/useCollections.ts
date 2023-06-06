import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import ms from 'ms'

import APIClient, { url } from '../../../services/api-client'

// const apiClient = new APIClient<Collection>('/collections')

const useCollections = () => {
  return useQuery<Collection[], Error>({
    queryKey: ['collections'],

    queryFn: () => axios.get(`${url}/collections`).then((res) => res.data),
    staleTime: ms('12h'),
  })
}
// useQuery({
//   queryKey: ['collections2'],
//   queryFn: apiClient.getAll,
//   staleTime: ms('12h'),
//   initialData: collections,
// })

// const useCollections = () =>
//   useQuery({
//     queryKey: ['collections2'],
//     queryFn: apiClient.getAll,
//     staleTime: ms('12h'),
//     initialData: collections,
//   })

export default useCollections
