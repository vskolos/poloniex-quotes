import { useQuoteTicker } from '@/hooks'
import { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'

export function Quotes() {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const ticker = useQuoteTicker()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ gap: 16, padding: 8, alignItems: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: '500' }}>Котировки</Text>

          {(ticker.isError || isError) && (
            <Text style={{ color: 'red' }}>Ошибка загрузки данных...</Text>
          )}

          {ticker.isLoading || isLoading ? (
            <Text style={{ color: 'green' }}>Загрузка данных...</Text>
          ) : ticker.data ? (
            <View style={{ gap: 8, alignSelf: 'stretch' }}>
              {Object.entries(ticker.data).map(([name, data]) => (
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
              ))}
            </View>
          ) : (
            <Text>Нет данных для отображения</Text>
          )}
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          padding: 8,
        }}
      >
        <Pressable
          style={{
            backgroundColor: '#ea580c',
            padding: 8,
            borderRadius: 8,
          }}
          onPress={() => setIsLoading((isLoading) => !isLoading)}
        >
          <Text style={{ color: '#ffffff' }}>
            {isLoading ? 'Restore loading' : 'Force loading'}
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: '#dc2626',
            padding: 8,
            borderRadius: 8,
          }}
          onPress={() => setIsError((isError) => !isError)}
        >
          <Text style={{ color: '#ffffff' }}>
            {isError ? 'Restore error' : 'Force error'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
