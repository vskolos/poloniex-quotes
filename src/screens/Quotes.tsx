import { QuoteList } from '@/components'
import { SafeAreaView, Text, View } from 'react-native'

export function Quotes() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          padding: 8,
          gap: 8,
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: '500' }}>Котировки</Text>
        <QuoteList />
      </View>
    </SafeAreaView>
  )
}
