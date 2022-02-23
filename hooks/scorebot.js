import useSWR from 'swr'

function useUser (id) {
    const { data, error } = useSWR(`/api/tempURL`, fetcher)

        return {
        user: data,
        isLoading: !error && !data,
        isError: error
        }
    }
