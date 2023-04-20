import { Quote } from '@/schemas'
import { Text, View } from 'react-native'

type Props = { name: string; data: Quote }

export function QuoteCard({ name, data }: Props) {
  return (
    <View
      key={name}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        gap: 16,
        backgroundColor: '#ffffff',
        borderRadius: 12,
      }}
    >
      <View style={{ gap: 4, marginEnd: 'auto' }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
          }}
        >
          {name}
        </Text>
        <Text>Last: {data.last}</Text>
        <Text>High: {data.highestBid}</Text>
      </View>
      <View
        style={{
          padding: 8,
          borderRadius: 8,
          backgroundColor:
            parseFloat(data.percentChange) > 0
              ? '#16a34a'
              : parseFloat(data.percentChange) < 0
              ? '#dc2626'
              : '#525252',
        }}
      >
        <Text
          style={{
            color: '#ffffff',
            fontSize: 20,
            fontWeight: '700',
          }}
        >
          {parseFloat(data.percentChange) > 0 && '+'}
          {data.percentChange.replace(/([0-9]{2})0+$/, '$1')}%
        </Text>
      </View>
    </View>
  )
}
