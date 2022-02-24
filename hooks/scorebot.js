import useSWR from 'swr'
import { fetcher } from "../hooks/fetcher"

export function useUser (id, page = 1, size = 10) {
    const { data, error } = useSWR(id
        ? `/api/tempURL`
        : null,
      id ? fetcher : null,
      {
        refreshInterval: 10000,
        refreshWhenHidden: true,
      },)

        return {
            entries: data?.items,
            player: {
                name: data?.name,
                score: data?.score,
            },
            loading: !data && !error,
            error
        }
    }
