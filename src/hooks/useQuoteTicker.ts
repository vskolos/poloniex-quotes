import { QuoteData } from '@/schemas'
import { useQuery } from '@tanstack/react-query'

export function useQuoteTicker() {
  return useQuery({
    queryKey: ['ticker'],
    queryFn: async () => {
      console.log('fetching')

      const result = await fetch(
        'https://poloniex.com/public?command=returnTicker'
      )

      if (!result.ok) throw new Error('Ошибка загрузки данных с сервера')
      const json = await result.json()

      try {
        return QuoteData.parse(json)
      } catch {
        throw new Error('Ошибка структуры полученных с сервера данных')
      }
    },
    refetchInterval: 5000,
    onError: (error: Error) => console.log(error.message),
  })
}
