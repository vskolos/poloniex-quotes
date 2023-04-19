import { z } from 'zod'

export const Quote = z.object({
  last: z.string(),
  highestBid: z.string(),
  percentChange: z.string(),
})

export const QuoteData = z.record(z.string(), Quote)

export type Quote = z.infer<typeof Quote>
export type QuoteData = z.infer<typeof QuoteData>
